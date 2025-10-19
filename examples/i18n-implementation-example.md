# 🌍 Exemplo Prático: Internacionalização (i18n) em React

> **Cenário Real:** Adicionar suporte multi-idioma a uma aplicação React existente

---

## 📝 Interação com o Coach

### 1️⃣ Requisição Inicial

```
VOCÊ: "Meu app React precisa suportar português e inglês. Como implemento i18n?"
```

---

### 2️⃣ Resposta do Coach (Discovery)

```markdown
## 🎯 OBJETIVO
Implementar internacionalização completa com suporte a pt-BR e en-US.

## 🔍 PERGUNTAS ESTRATÉGICAS:

1. **Framework/Setup:**
   - [ ] React puro ou Next.js/Remix?
   - [ ] Versão do React?
   - [ ] TypeScript habilitado?

2. **Escopo de Tradução:**
   - [ ] Quantas páginas/componentes aproximadamente?
   - [ ] Conteúdo estático ou dinâmico (CMS)?
   - [ ] Precisa traduzir URLs/rotas?

3. **Formatação Regional:**
   - [ ] Datas (ex: 20/10/2024 vs 10/20/2024)?
   - [ ] Números (1.000,50 vs 1,000.50)?
   - [ ] Moeda (R$ vs $)?

4. **Detecção de Idioma:**
   - [ ] Auto-detect do browser?
   - [ ] Seletor manual?
   - [ ] URL-based (/pt-br/sobre vs /en/about)?

5. **Futuros Idiomas:**
   - [ ] Planeja adicionar mais idiomas?
   - [ ] Incluirá idiomas RTL (árabe, hebraico)?
```

---

### 3️⃣ Respostas do Desenvolvedor

```
VOCÊ:
"React 18 puro com TypeScript
~15 páginas, conteúdo majoritariamente estático
Sim, preciso formatar datas e moeda
Prefiro auto-detect + seletor manual
Futuramente espanhol também
Não planejo RTL por enquanto"
```

---

### 4️⃣ Implementação do Coach

```markdown
## 🎯 SOLUÇÃO PROPOSTA

### Stack Escolhida
- **react-i18next** (mais popular, 11k+ stars)
- **date-fns** para formatação de datas
- **Intl API** nativa para números/moeda

### Por que react-i18next?
✅ SSR-ready (caso migre para Next.js)
✅ TypeScript support forte
✅ Plural/context/nesting automático
✅ Namespace organization
✅ Lazy loading de traduções
✅ Detection plugin (browser, localStorage)

## 💻 IMPLEMENTAÇÃO

### FASE 1: Instalação e Setup

```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend date-fns
```

### FASE 2: Configuração (src/i18n/config.ts)

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  // Carrega traduções via HTTP
  .use(Backend)
  // Detecta idioma do usuário
  .use(LanguageDetector)
  // Conecta com React
  .use(initReactI18next)
  .init({
    // Idiomas suportados
    supportedLngs: ['pt-BR', 'en-US'],

    // Fallback se tradução não existir
    fallbackLng: 'pt-BR',

    // Namespace padrão
    defaultNS: 'common',

    // Debug em desenvolvimento
    debug: process.env.NODE_ENV === 'development',

    // Configuração de detecção
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    // Configuração do backend
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Interpolação
    interpolation: {
      escapeValue: false, // React já escapa por padrão
      formatSeparator: ',',
    },

    // React específico
    react: {
      useSuspense: true, // Loading state automático
    },
  })

export default i18n
```

### FASE 3: Estrutura de Arquivos de Tradução

```
public/
└── locales/
    ├── pt-BR/
    │   ├── common.json
    │   ├── auth.json
    │   └── dashboard.json
    └── en-US/
        ├── common.json
        ├── auth.json
        └── dashboard.json
```

**public/locales/pt-BR/common.json**
```json
{
  "welcome": "Bem-vindo",
  "greeting": "Olá, {{name}}!",
  "itemCount": "{{count}} item",
  "itemCount_plural": "{{count}} itens",
  "navigation": {
    "home": "Início",
    "about": "Sobre",
    "contact": "Contato"
  },
  "buttons": {
    "save": "Salvar",
    "cancel": "Cancelar",
    "delete": "Excluir"
  }
}
```

**public/locales/en-US/common.json**
```json
{
  "welcome": "Welcome",
  "greeting": "Hello, {{name}}!",
  "itemCount": "{{count}} item",
  "itemCount_plural": "{{count}} items",
  "navigation": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "buttons": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete"
  }
}
```

### FASE 4: Setup no App (src/App.tsx)

```typescript
import { Suspense } from 'react'
import './i18n/config' // Importa configuração

function App() {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <AppContent />
    </Suspense>
  )
}

function AppContent() {
  // Seu app aqui
}

export default App
```

### FASE 5: Componente de Seletor de Idioma

**src/components/LanguageSelector.tsx**
```typescript
import { useTranslation } from 'react-i18next'

const languages = {
  'pt-BR': { name: 'Português', flag: '🇧🇷' },
  'en-US': { name: 'English', flag: '🇺🇸' },
}

export function LanguageSelector() {
  const { i18n } = useTranslation()

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="px-3 py-2 border rounded-md"
      aria-label="Select language"
    >
      {Object.entries(languages).map(([code, { name, flag }]) => (
        <option key={code} value={code}>
          {flag} {name}
        </option>
      ))}
    </select>
  )
}
```

### FASE 6: Usando Traduções em Componentes

**Tradução Simples**
```typescript
import { useTranslation } from 'react-i18next'

function HomePage() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'João' })}</p>
    </div>
  )
}
```

**Tradução com Plural**
```typescript
function ItemList({ items }: { items: any[] }) {
  const { t } = useTranslation()

  return (
    <div>
      <p>{t('itemCount', { count: items.length })}</p>
    </div>
  )
}
```

**Tradução com Namespace**
```typescript
function LoginPage() {
  const { t } = useTranslation('auth')

  return (
    <form>
      <label>{t('email')}</label>
      <button>{t('login')}</button>
    </form>
  )
}
```

### FASE 7: Formatação Regional

**src/utils/formatters.ts**
```typescript
import { format } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import i18n from '@/i18n/config'

// Mapa de locales
const locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

// Formatação de Data
export function formatDate(
  date: Date,
  formatStr: string = 'PPP'
): string {
  const locale = locales[i18n.language as keyof typeof locales] || ptBR
  return format(date, formatStr, { locale })
}

// Formatação de Moeda
export function formatCurrency(
  value: number,
  currency: string = 'BRL'
): string {
  const locale = i18n.language

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

// Formatação de Número
export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(i18n.language, options).format(value)
}
```

**Uso nos Componentes**
```typescript
import { formatDate, formatCurrency, formatNumber } from '@/utils/formatters'

function Dashboard() {
  const today = new Date()
  const revenue = 1234.56
  const users = 10000

  return (
    <div>
      <p>Data: {formatDate(today)}</p>
      <p>Receita: {formatCurrency(revenue)}</p>
      <p>Usuários: {formatNumber(users)}</p>
    </div>
  )
}

// Output pt-BR:
// Data: 20 de outubro de 2024
// Receita: R$ 1.234,56
// Usuários: 10.000

// Output en-US:
// Data: October 20, 2024
// Receita: $1,234.56
// Usuários: 10,000
```

### FASE 8: TypeSafe Translations (Bonus)

**src/i18n/types.ts**
```typescript
import common from '../../public/locales/pt-BR/common.json'
import auth from '../../public/locales/pt-BR/auth.json'

export interface I18nNamespaces {
  common: typeof common
  auth: typeof auth
}

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
```

**Agora você tem autocomplete:**
```typescript
const { t } = useTranslation()
t('navigation.') // ← autocomplete sugere "home", "about", "contact"
```

## ⚠️ CONSIDERAÇÕES IMPORTANTES

### Performance
- ✅ Use lazy loading para traduções grandes
- ✅ Namespaces evitam carregar tudo de uma vez
- ✅ Cache de traduções no localStorage

### SEO (se migrar para SSR)
- ✅ Configure hreflang tags
- ✅ URLs traduzidas (/pt-br/sobre vs /en/about)
- ✅ Sitemap multi-idioma

### UX
- ✅ Mantenha idioma escolhido entre sessões
- ✅ Fallback para idioma padrão se tradução faltar
- ✅ Loading state durante troca de idioma

### Manutenção
- ✅ Use ferramenta de tradução (Lokalise, Crowdin)
- ✅ Automatize verificação de chaves faltantes
- ✅ Organize traduções por feature/namespace

## ✅ VALIDAÇÃO

### Checklist
- [ ] Todas as strings estão traduzidas (sem hardcode)
- [ ] Plural funciona corretamente
- [ ] Datas formatadas por locale
- [ ] Moeda formatada por locale
- [ ] Seletor de idioma persiste escolha
- [ ] Fallback para idioma padrão funciona
- [ ] TypeScript autocomplete funcionando
- [ ] No console errors relacionados a i18n

### Teste Manual
```typescript
// Teste cada idioma manualmente
// 1. Troque idioma no seletor
// 2. Recarregue a página
// 3. Verifique se manteve o idioma
// 4. Teste plural: 0, 1, 2+ itens
// 5. Verifique formatação de data/moeda
```

## 🚀 PRÓXIMOS PASSOS

1. **Adicionar Espanhol**: Crie `/locales/es-ES/`
2. **Tradução de Erros**: Namespace específico para mensagens de erro
3. **Integração com CMS**: Strapi/Contentful para conteúdo dinâmico
4. **Automation**: Script para detectar chaves faltantes
5. **A/B Testing**: Teste diferentes termos por locale
```

---

## 🎓 Aprendizados

### O que foi bem:
1. ✅ Escolha fundamentada da biblioteca (react-i18next)
2. ✅ Organização escalável (namespaces)
3. ✅ TypeScript support desde o início
4. ✅ Formatação regional nativa (Intl API)
5. ✅ UX considerada (persistência, fallback)

### Para adaptar:
- Next.js: use `next-i18next`
- Vue: use `vue-i18n`
- Angular: use `@ngx-translate/core`

---

## 📚 Recursos
- [react-i18next Docs](https://react.i18next.com/)
- [ICU Message Format](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [date-fns Locales](https://date-fns.org/v2.29.3/docs/Locale)
