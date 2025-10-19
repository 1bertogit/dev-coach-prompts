# 🔐 Exemplo Prático: Autenticação Next.js + Supabase

> **Cenário Real:** Implementar sistema completo de autenticação usando o Development Coach

---

## 📝 Interação com o Coach

### 1️⃣ Requisição Inicial do Desenvolvedor

```
VOCÊ: "Preciso implementar autenticação no meu app Next.js com Supabase"
```

---

### 2️⃣ Resposta do Coach (Discovery Phase)

```markdown
## 🎯 OBJETIVO DESTA ETAPA
Vamos estruturar um sistema de autenticação seguro e escalável para sua aplicação Next.js usando Supabase.

## 📦 CONTEXTO & DECISÕES NECESSÁRIAS

Antes de implementar, preciso entender melhor seu contexto:

## 🔍 PERGUNTAS ESTRATÉGICAS:

### Stack & Setup
1. **Versão do Next.js?** (Pages Router ou App Router?)
2. **Supabase já configurado?** (Projeto criado? Env vars configuradas?)
3. **UI Library preferida?** (Shadcn/ui, MUI, Chakra, Tailwind puro?)

### Funcionalidades de Auth
4. **Métodos de autenticação necessários:**
   - [ ] Email/Password
   - [ ] Magic Link (email sem senha)
   - [ ] OAuth (Google, GitHub, etc.)
   - [ ] Phone/SMS

5. **Recursos adicionais:**
   - [ ] Roles e permissões (admin, user, etc.)
   - [ ] Email verification obrigatório?
   - [ ] Password reset flow?
   - [ ] 2FA/MFA?

### Escala & Performance
6. **Estimativa de usuários simultâneos?** (<100, 100-1000, >1000)
7. **Regions críticas?** (Edge functions, replicação geográfica)

### Compliance
8. **Requisitos legais?** (GDPR, LGPD, termos de uso)

---

Responda com o que você souber, e vou adaptar a implementação ao seu contexto!
```

---

### 3️⃣ Respostas do Desenvolvedor

```
VOCÊ:
"Next.js 14 com App Router
Supabase já configurado (projeto criado, vars no .env.local)
Quero usar Shadcn/ui
Preciso de Email/Password + Google OAuth
Sim para roles (admin/user), email verification, e password reset
Esperamos ~500 usuários simultâneos inicialmente
Brasil é região prioritária
Sim, preciso estar em compliance com LGPD"
```

---

### 4️⃣ Resposta do Coach (Architecture Phase)

```markdown
## 🎯 OBJETIVO DESTA ETAPA
Planejar arquitetura de autenticação production-ready para Next.js 14 (App Router) + Supabase.

## 📦 CONTEXTO & DECISÕES

✅ **Stack confirmado:**
- Next.js 14 (App Router)
- Supabase (Auth + Database)
- Shadcn/ui (componentes)
- TypeScript strict mode

✅ **Features de Auth:**
- Email/Password + Google OAuth
- Role-based access (admin/user)
- Email verification obrigatória
- Password reset flow
- LGPD compliance

## 🔍 ANÁLISE TÉCNICA

### Por que essa arquitetura?

**Supabase Auth Benefits:**
- ✅ Row Level Security (RLS) nativo
- ✅ OAuth providers integrados
- ✅ Email templates customizáveis
- ✅ Session management automático
- ✅ Edge-ready (baixa latência)

**Next.js 14 App Router Benefits:**
- ✅ Server Components por padrão (segurança)
- ✅ Middleware para route protection
- ✅ Server Actions para mutations
- ✅ Edge Runtime compatibility

### Estrutura de Arquitetura Proposta

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── reset-password/
│   │   └── verify-email/
│   ├── (protected)/
│   │   ├── dashboard/
│   │   └── admin/
│   ├── api/
│   │   └── auth/
│   │       └── callback/
│   ├── middleware.ts
│   └── layout.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts       # Client-side
│   │   ├── server.ts       # Server Components
│   │   └── middleware.ts   # Middleware
│   ├── auth/
│   │   ├── permissions.ts  # Role checks
│   │   └── session.ts      # Session helpers
│   └── utils/
│       └── logger.ts       # Audit log
└── components/
    ├── auth/
    │   ├── LoginForm.tsx
    │   ├── SignupForm.tsx
    │   └── OAuthButtons.tsx
    └── guards/
        └── RoleGuard.tsx
```

### Database Schema (Supabase)

```sql
-- Profiles table (complementar ao auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- RLS Policies
alter table public.profiles enable row level security;

create policy "Usuários podem ver próprio perfil"
  on profiles for select
  using (auth.uid() = id);

create policy "Admins podem ver todos"
  on profiles for select
  using (
    exists (
      select 1 from profiles
      where id = auth.uid() and role = 'admin'
    )
  );
```

## 💻 IMPLEMENTAÇÃO

### FASE 1: Configuração Base do Supabase

#### 1.1 Supabase Clients (lib/supabase/)

**client.ts** (Client Components)
```typescript
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/supabase'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**server.ts** (Server Components)
```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

export async function createClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Silently fail in Server Component context
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Silently fail in Server Component context
          }
        },
      },
    }
  )
}
```

### FASE 2: Middleware de Proteção de Rotas

**middleware.ts**
```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Redirect não-autenticados de rotas protegidas
  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect autenticados das páginas de auth
  if (user && ['/login', '/signup'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

### FASE 3: Server Actions para Auth

**app/actions/auth.ts**
```typescript
'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
  fullName: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
})

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const validatedFields = signUpSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    fullName: formData.get('fullName'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password, fullName } = validatedFields.data

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true, message: 'Verifique seu email para confirmar o cadastro' }
}

export async function signIn(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  redirect('/dashboard')
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}
```

## ⚠️ CONSIDERAÇÕES IMPORTANTES

### Segurança
- ✅ **Nunca** exponha service_role_key no frontend
- ✅ Use RLS (Row Level Security) em TODAS as tabelas
- ✅ Valide inputs no server (Server Actions)
- ✅ Rate limiting no Supabase Dashboard

### Performance
- ✅ Session cache no middleware (evita DB hits)
- ✅ Edge Runtime quando possível
- ✅ Lazy load componentes de auth

### LGPD Compliance
- ✅ Consent para cookies obrigatório
- ✅ Política de privacidade acessível
- ✅ Right to deletion (implementar deleteAccount action)
- ✅ Data portability (export user data)

## ✅ VALIDAÇÃO

### Checklist de Teste

- [ ] Signup cria usuário e envia email de verificação
- [ ] Email verification link funciona
- [ ] Login com credenciais corretas redireciona para dashboard
- [ ] Login com credenciais erradas mostra erro claro
- [ ] Google OAuth completa o fluxo sem erros
- [ ] Rotas protegidas bloqueiam não-autenticados
- [ ] Logout limpa sessão e redireciona
- [ ] Password reset envia email e permite reset
- [ ] Role-based access funciona (admin vs user)

### Comandos de Teste
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build (valida Server Actions)
npm run build
```

## 🚀 PRÓXIMOS PASSOS

1. **Email Templates**: Customizar no Supabase Dashboard
2. **2FA**: Adicionar com `supabase.auth.mfa`
3. **Social Logins**: Configurar GitHub, Discord, etc.
4. **Audit Log**: Implementar logging de ações sensíveis
5. **Rate Limiting**: Adicionar no Edge Middleware
6. **Monitoring**: Sentry para erros de auth
```

---

## 🎓 Aprendizados do Exemplo

### O que o Coach fez bem:
1. ✅ **Fez perguntas antes de implementar** (Discovery)
2. ✅ **Explicou o PORQUÊ** das decisões técnicas
3. ✅ **Código production-ready** com TypeScript strict
4. ✅ **Considerou segurança, performance e compliance**
5. ✅ **Forneceu checklist de validação**
6. ✅ **Sugeriu próximos passos**

### Como você pode adaptar:
- Troque Next.js por React/Vue/Angular
- Troque Supabase por Firebase/Auth0/Clerk
- Adicione suas próprias regras de negócio
- Expanda com features específicas do seu produto

---

## 📚 Recursos Adicionais

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js 14 Auth Best Practices](https://nextjs.org/docs/app/building-your-application/authentication)
- [Shadcn/ui Form Components](https://ui.shadcn.com/docs/components/form)
