# 🔍 Template: Code Review com Development Coach

> Use este template para fazer code review usando o checklist de qualidade do Coach

---

## 📋 INFORMAÇÕES DO PR/COMMIT

- **Autor:** _______________________
- **Data:** ___/___/_____
- **Tipo:** [ ] Feature [ ] Bug Fix [ ] Refactor [ ] Docs [ ] Outro
- **Descrição:** _______________________

---

## 🎯 PROMPT PARA REVIEW

```
Preciso de um code review detalhado seguindo o checklist de qualidade do Development Coach.

CONTEXTO:
- Projeto: [nome]
- Stack: [tecnologias]
- Tipo de mudança: [feature/bugfix/refactor]
- Arquivos modificados: [lista]

Por favor, analise o código seguindo as 10 categorias do checklist:
1. Acessibilidade (A11Y)
2. SEO
3. UX
4. Design System
5. Internacionalização
6. Performance
7. Segurança
8. Comunicação
9. PWA
10. Testes

Para cada categoria, indique:
- ✅ O que está bom
- ⚠️ O que precisa melhorar
- 🚨 O que é crítico e bloqueia merge
```

---

## ✅ CHECKLIST DE REVIEW

### 🎯 1. ACESSIBILIDADE (A11Y)

**Navegação por Teclado:**
- [ ] Todos elementos interativos acessíveis via Tab
- [ ] Ordem de tabulação lógica
- [ ] Enter/Space ativam botões/links
- [ ] Escape fecha modals/menus

**Gerenciamento de Foco:**
- [ ] Focus visível (outline ou estilo custom)
- [ ] Focus trap em modals
- [ ] Focus restaurado ao fechar modal
- [ ] Skip links implementados (se aplicável)

**Estrutura Semântica:**
- [ ] Landmarks corretos (nav, main, aside, footer)
- [ ] Headings hierárquicos (h1 → h2 → h3)
- [ ] Listas usam `<ul>/<ol>` apropriadamente
- [ ] Forms usam `<label>` com `htmlFor`

**Elementos Visuais:**
- [ ] Contraste mínimo 4.5:1 (texto normal)
- [ ] Contraste mínimo 3:1 (texto grande)
- [ ] Imagens têm `alt` text descritivo
- [ ] Ícones decorativos têm `aria-hidden="true"`

**ARIA Attributes:**
- [ ] `role` usado corretamente (se necessário)
- [ ] `aria-label` para elementos sem texto visível
- [ ] `aria-expanded` em toggles
- [ ] `aria-live` para atualizações dinâmicas

**Notas/Issues:**
_______________________

---

### 🔍 2. SEO

**Estrutura de Conteúdo:**
- [ ] Meta title único e descritivo (<60 chars)
- [ ] Meta description relevante (<160 chars)
- [ ] Canonical URL definida
- [ ] Um único `<h1>` por página

**Dados Estruturados:**
- [ ] Schema.org markup (se aplicável)
- [ ] Open Graph tags (og:title, og:image, og:description)
- [ ] Twitter Card tags (se relevante)

**Assets & Performance:**
- [ ] Imagens têm `alt` text
- [ ] URLs são descritivas (não /page?id=123)
- [ ] Robots.txt configurado
- [ ] Sitemap.xml atualizado

**Notas/Issues:**
_______________________

---

### 🎨 3. UX

**Formulários:**
- [ ] Labels claros e visíveis
- [ ] Validação inline com feedback claro
- [ ] Erros específicos (não apenas "erro")
- [ ] Botão submit não duplica ações

**Navegação:**
- [ ] Breadcrumbs (se aplicável)
- [ ] Active state em navegação
- [ ] Botão voltar funciona corretamente
- [ ] Loading states durante operações

**Microcopy:**
- [ ] CTAs claros e acionáveis
- [ ] Mensagens de erro úteis (não técnicas)
- [ ] Empty states informativos
- [ ] Sucesso confirmado visualmente

**Responsividade:**
- [ ] Mobile-first CSS
- [ ] Touch targets ≥44x44px
- [ ] Texto legível sem zoom (min 16px)
- [ ] Scroll horizontal ausente

**Notas/Issues:**
_______________________

---

### 🎨 4. DESIGN SYSTEM

**Modo Escuro:**
- [ ] Suporta dark mode
- [ ] Contraste adequado em ambos temas
- [ ] Transição suave entre temas
- [ ] Preferência do sistema respeitada

**Theming:**
- [ ] CSS variables para cores
- [ ] Tokens de design padronizados
- [ ] Componentes usam theme tokens

**Notas/Issues:**
_______________________

---

### 🌍 5. INTERNACIONALIZAÇÃO

**i18n:**
- [ ] Strings hardcoded identificadas
- [ ] Tradução implementada (se aplicável)
- [ ] Formatação de data/número regional
- [ ] Moeda formatada corretamente

**RTL Support (se aplicável):**
- [ ] Layout funciona em RTL
- [ ] Ícones direcionais invertem

**Notas/Issues:**
_______________________

---

### ⚡ 6. PERFORMANCE

**Core Web Vitals:**
- [ ] LCP <2.5s (Largest Contentful Paint)
- [ ] FID <100ms (First Input Delay)
- [ ] CLS <0.1 (Cumulative Layout Shift)

**Otimizações:**
- [ ] Lazy loading de imagens
- [ ] Code splitting implementado
- [ ] Componentes pesados em lazy import
- [ ] Memoization em cálculos pesados

**Assets:**
- [ ] Fontes otimizadas (subset, preload)
- [ ] Ícones inline ou sprite
- [ ] Bundle size razoável (<500KB inicial)

**Notas/Issues:**
_______________________

---

### 🔒 7. SEGURANÇA

**Validação:**
- [ ] Input validation server-side
- [ ] Sanitização de HTML (evitar XSS)
- [ ] Rate limiting (APIs)
- [ ] CORS configurado corretamente

**Auth & Permissions:**
- [ ] Rotas protegidas verificam auth
- [ ] Permissões checadas server-side
- [ ] Tokens em httpOnly cookies (não localStorage)

**Data Protection:**
- [ ] HTTPS enforçado
- [ ] Senhas nunca em logs
- [ ] Secrets em variáveis de ambiente

**Compliance:**
- [ ] Cookie consent (GDPR/LGPD)
- [ ] Termos de uso link visível
- [ ] Privacy policy atualizada

**Notas/Issues:**
_______________________

---

### 📧 8. COMUNICAÇÃO

**Email System:**
- [ ] Templates responsivos
- [ ] Plain text fallback
- [ ] Unsubscribe link (se marketing)

**Notificações:**
- [ ] Toast/snackbar para feedback
- [ ] Não-intrusivas
- [ ] Dismissable

**Notas/Issues:**
_______________________

---

### 🌐 9. PWA (Se Aplicável)

**Manifest:**
- [ ] Web App Manifest configurado
- [ ] Ícones em múltiplos tamanhos
- [ ] Theme color definido

**Service Worker:**
- [ ] Offline fallback
- [ ] Cache strategy definida

**Notas/Issues:**
_______________________

---

### 🧪 10. TESTES

**Cobertura:**
- [ ] Testes unitários para lógica crítica
- [ ] Testes de integração (se mudança grande)
- [ ] Testes E2E para fluxos principais

**Qualidade de Código:**
- [ ] ESLint passa sem warnings
- [ ] TypeScript sem `any` (ou justificado)
- [ ] Prettier formatado
- [ ] Build passa sem erros

**Notas/Issues:**
_______________________

---

## 📊 SCORE GERAL

### Por Categoria (0-10):
- Acessibilidade: __/10
- SEO: __/10
- UX: __/10
- Design System: __/10
- i18n: __/10
- Performance: __/10
- Segurança: __/10
- Comunicação: __/10
- PWA: __/10
- Testes: __/10

**TOTAL: __/100**

---

## 🚨 ISSUES CRÍTICOS (Bloqueiam Merge)

1. _______________________
2. _______________________
3. _______________________

---

## ⚠️ MELHORIAS NECESSÁRIAS (Devem ser resolvidas)

1. _______________________
2. _______________________
3. _______________________

---

## 💡 SUGESTÕES (Nice to Have)

1. _______________________
2. _______________________
3. _______________________

---

## ✅ PONTOS POSITIVOS

1. _______________________
2. _______________________
3. _______________________

---

## 🎯 DECISÃO FINAL

- [ ] ✅ **APPROVED** - Pode fazer merge
- [ ] ⚠️ **APPROVED COM RESSALVAS** - Merge com follow-up issues
- [ ] 🚨 **CHANGES REQUESTED** - Precisa de alterações antes do merge
- [ ] ❌ **REJECTED** - Não está alinhado com requisitos

---

## 📝 COMENTÁRIOS ADICIONAIS

_______________________
_______________________
_______________________

---

**Reviewer:** _______________________
**Data da Review:** ___/___/_____
