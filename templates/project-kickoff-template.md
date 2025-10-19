# 🚀 Template: Project Kickoff

> Use este template ao iniciar um novo projeto com o Development Coach

---

## 📋 INFORMAÇÕES DO PROJETO

### Identificação
- **Nome do Projeto:** _______________________
- **Tipo:** [ ] Web App [ ] Mobile [ ] Desktop [ ] API [ ] Biblioteca
- **Objetivo Principal:** _______________________
- **Prazo:** _______________________

---

## 🎯 DISCOVERY (Responda antes de começar)

### 1. WHO (Quem)

**Time:**
- [ ] Solo developer
- [ ] Pequena equipe (2-5 pessoas)
- [ ] Equipe média (6-15 pessoas)
- [ ] Grande empresa (>15 pessoas)

**Nível Técnico do Time:**
- [ ] Júnior
- [ ] Pleno
- [ ] Sênior
- [ ] Misto

**Usuários Finais:**
- **Quem vai usar:** _______________________
- **Nível técnico:** [ ] Leigo [ ] Intermediário [ ] Técnico
- **Estimativa de usuários:** [ ] <100 [ ] 100-1K [ ] 1K-10K [ ] >10K

---

### 2. WHY (Por Quê)

**Problema Central:**
_______________________
_______________________

**Valor de Negócio:**
_______________________
_______________________

**Métricas de Sucesso:**
- [ ] Performance (tempo de carregamento <3s)
- [ ] Conversão (taxa de >___%)
- [ ] Engajamento (DAU/MAU)
- [ ] Receita (MRR/ARR)
- [ ] Outro: _______________________

---

### 3. WHAT (O Quê)

**Stack Técnico:**

**Frontend:**
- [ ] React
- [ ] Next.js
- [ ] Vue
- [ ] Angular
- [ ] Svelte
- [ ] Outro: _______________________

**Backend:**
- [ ] Node.js (Express/Fastify)
- [ ] Next.js API Routes/Server Actions
- [ ] Python (Django/FastAPI)
- [ ] Go
- [ ] Serverless (Vercel/Netlify Functions)
- [ ] Outro: _______________________

**Database:**
- [ ] PostgreSQL
- [ ] MySQL
- [ ] MongoDB
- [ ] Supabase
- [ ] Firebase
- [ ] Outro: _______________________

**Auth:**
- [ ] Supabase Auth
- [ ] NextAuth.js
- [ ] Auth0
- [ ] Clerk
- [ ] Firebase Auth
- [ ] Custom
- [ ] Outro: _______________________

**Styling:**
- [ ] Tailwind CSS
- [ ] CSS Modules
- [ ] Styled Components
- [ ] Emotion
- [ ] Sass/SCSS
- [ ] Outro: _______________________

**UI Library (opcional):**
- [ ] Shadcn/ui
- [ ] Material UI
- [ ] Chakra UI
- [ ] Ant Design
- [ ] Nenhuma
- [ ] Outro: _______________________

**Features Principais:**
1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

**Integrações Necessárias:**
- [ ] Payment (Stripe, PayPal, etc.)
- [ ] Email (SendGrid, Resend, etc.)
- [ ] Storage (S3, Cloudinary, etc.)
- [ ] Analytics (Google Analytics, Plausible, etc.)
- [ ] Monitoring (Sentry, LogRocket, etc.)
- [ ] Outras: _______________________

**Constraints & Compliance:**
- [ ] GDPR
- [ ] LGPD
- [ ] HIPAA
- [ ] SOC2
- [ ] Acessibilidade WCAG AA
- [ ] SEO obrigatório
- [ ] Mobile-first
- [ ] Outros: _______________________

---

### 4. HOW (Como)

**Arquitetura Preferida:**
- [ ] Monolith
- [ ] Microservices
- [ ] Serverless
- [ ] JAMstack
- [ ] Hybrid

**Estrutura de Pastas:**
- [ ] Feature-based (agrupado por feature)
- [ ] Layer-based (agrupado por tipo: components, hooks, utils)
- [ ] Domain-driven (agrupado por domínio de negócio)

**Estratégia de Delivery:**
- [ ] MVP mínimo (core features apenas)
- [ ] Phased rollout (releases incrementais)
- [ ] Big bang (tudo de uma vez)

**Formato de Entrega Desejado:**
- [ ] Código completo comentado
- [ ] Snippets com explicações
- [ ] Documentação + pseudocódigo
- [ ] Arquitetura + implementação guiada

---

## 🎯 PRIORIZAÇÃO DE QUALIDADE

### Fase MVP (Minimum Viable Product)
**Obrigatório:**
- [ ] Funcionalidades core funcionando
- [ ] Acessibilidade básica (navegação por teclado, contrast)
- [ ] Responsividade mobile
- [ ] Error handling básico
- [ ] TypeScript (sem `any`)

**Desejável:**
- [ ] Testes unitários para lógica crítica
- [ ] SEO básico (meta tags)
- [ ] Performance >70 (Lighthouse)

---

### Fase Beta
**Adicionar ao MVP:**
- [ ] SEO completo
- [ ] Performance >80
- [ ] Testes de integração
- [ ] Monitoring básico
- [ ] Email transacional

---

### Fase Production
**Adicionar à Beta:**
- [ ] Performance >90
- [ ] Security audit
- [ ] Testes E2E
- [ ] CI/CD pipeline
- [ ] Documentação completa
- [ ] Analytics
- [ ] Backup strategy

---

## 🚀 PROMPT PARA O COACH

Cole este prompt preenchido no seu AI assistant:

```
Preciso de ajuda para criar um projeto seguindo a metodologia 4W+.

WHO:
- Time: [seu time]
- Nível técnico: [nível]
- Usuários finais: [descrição]

WHY:
- Problema: [problema central]
- Valor: [valor de negócio]
- Métrica de sucesso: [métrica principal]

WHAT:
- Stack: [lista seu stack]
- Features principais: [lista 3-5 features]
- Integrações: [lista]
- Compliance: [requisitos]

HOW:
- Arquitetura: [escolhida]
- Delivery: [estratégia]
- Formato: [preferência de entrega]

Fase atual: [MVP/Beta/Production]

Siga a metodologia 4W+ fazendo perguntas estratégicas antes de cada implementação.
```

---

## 📝 NOTAS & OBSERVAÇÕES

_Espaço livre para anotar decisões técnicas, discussões com stakeholders, etc._

_______________________
_______________________
_______________________
_______________________
_______________________

---

## ✅ CHECKLIST DE SETUP INICIAL

Após definir o projeto acima:

### Ambiente de Desenvolvimento
- [ ] Node.js instalado (versão LTS)
- [ ] Git configurado
- [ ] Editor de código configurado (VSCode + extensões)
- [ ] Linters configurados (ESLint, Prettier)

### Projeto Criado
- [ ] Repositório inicializado
- [ ] `.gitignore` configurado
- [ ] `README.md` criado
- [ ] Dependências instaladas
- [ ] Estrutura de pastas criada

### Configuração de Qualidade
- [ ] TypeScript configurado (strict mode)
- [ ] ESLint configurado
- [ ] Prettier configurado
- [ ] Husky (git hooks) configurado
- [ ] CI/CD básico (GitHub Actions/etc)

### Documentação Inicial
- [ ] README com setup instructions
- [ ] Contributing guidelines
- [ ] Code of conduct (se open source)
- [ ] License (se aplicável)

---

## 🎯 PRÓXIMOS PASSOS

1. **Preencha este template completamente**
2. **Cole o prompt gerado no seu AI assistant**
3. **Siga a metodologia 4W+ em cada feature**
4. **Use os checklists de qualidade em cada fase**
5. **Valide incrementalmente antes de avançar**

---

**Status:** [ ] Planning [ ] In Development [ ] Testing [ ] Production

**Última Atualização:** ___/___/_____
