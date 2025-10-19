# 🚀 Development Coach System Prompts - Kit Completo

> Sistema de prompts estruturados para coaching de desenvolvimento usando metodologia 4W+ com expertise técnica completa

## 📦 Conteúdo do Kit

### 📄 Arquivos Core

| Arquivo | Descrição | Tamanho | Uso |
|---------|-----------|---------|-----|
| **`system-prompt-dev-coach.md`** | ⭐ Prompt completo com knowledge base | ~8.5KB | **Principal** - Use em projetos grandes |
| **`system-prompt-resumido.md`** | 📝 Versão condensada | ~2KB | Contextos com limite de tokens |
| **`resumo-adicoes.md`** | 📋 Documentação das adições | ~3KB | Referência técnica |
| **`guia-de-uso.md`** | 📖 Tutorial completo de uso | ~4KB | Como usar em diferentes tools |
| **`CLAUDE.md`** | 🤖 Guia para Claude Code | ~5KB | Arquitetura e conceitos do projeto |

### 📁 Estrutura do Projeto

```
.
├── examples/              # Exemplos práticos de uso dos prompts
│   ├── nextjs-auth-example.md
│   └── i18n-implementation-example.md
├── templates/             # Templates reutilizáveis
│   ├── project-kickoff-template.md
│   └── code-review-template.md
├── scripts/               # Scripts de automação e validação
│   └── validate-translations.js
├── docs/                  # Documentação adicional
├── CONTRIBUTING.md        # Guia de contribuição
├── CHANGELOG.md          # Registro de mudanças
└── package.json          # Configuração e scripts npm
```

---

## 🎯 O Que Este Kit Faz

### Transforma o LLM em um Development Coach que:

✅ **Estrutura requisitos** usando metodologia 4W (Who, Why, What, How)  
✅ **Faz perguntas estratégicas** antes de implementar  
✅ **Propõe arquitetura** fundamentada com research  
✅ **Implementa código** production-ready com explicações  
✅ **Valida qualidade** usando checklist completo  
✅ **Educa enquanto constrói** explicando decisões técnicas  

---

## 🌟 Recursos Incluídos

### 1. 🧠 Metodologia 4W+ para Desenvolvimento
- **WHO:** Define especialista e audiência
- **WHY:** Estabelece objetivos e métricas
- **WHAT:** Mapeia stack, requisitos e constraints
- **HOW:** Planeja arquitetura e delivery

### 2. 🔄 Workflow em 4 Fases
1. **Discovery** - Coleta de requisitos estratégicos
2. **Architecture** - Design e research de soluções
3. **Implementation** - Código com padrões elevados
4. **Validation** - Checklist de qualidade

### 3. 📚 Knowledge Base Técnica

#### 🌍 Internacionalização (i18n)
- Código completo para Next.js, React, Vue
- Formatação regional (datas, números, moeda)
- Suporte RTL (árabe, hebraico)
- Estrutura de arquivos e traduções

#### 🌗 Dark Mode Acessível
- Sistema de variáveis CSS completo
- Hook de gerenciamento de tema
- Componente de toggle acessível
- Prevenção de flash (FOUC)
- Validação de contraste WCAG

### 4. ✅ Checklist de Qualidade Completo

**10 Categorias Principais:**
- 🎯 Acessibilidade (A11Y)
- 🔍 SEO
- 🎨 UX
- 🎨 Design System
- 🌍 Internacionalização
- ⚡ Performance
- 🔒 Segurança
- 📧 Comunicação
- 🌐 PWA
- 🧪 Testes

**120+ Itens Verificáveis**

---

## 🚀 Quick Start (5 minutos)

### Opção 1: Cursor IDE
```bash
# 1. Cole system-prompt-dev-coach.md em .cursorrules
# 2. Abra o chat: "Preciso implementar [X]"
# 3. O coach guiará o processo
```

### Opção 2: Claude Projects
```bash
# 1. Crie novo Project
# 2. Upload dos 3 arquivos principais
# 3. Em Custom Instructions: "Siga system-prompt-dev-coach.md"
# 4. Comece conversando
```

### Opção 3: ChatGPT Custom GPT
```bash
# 1. Create a GPT
# 2. Cole system-prompt-dev-coach.md em Instructions
# 3. Configure conversation starters
# 4. Save & Use
```

📖 **Para instruções detalhadas:** Leia `guia-de-uso.md`

---

## 📊 Exemplo de Uso

```
VOCÊ:
"Preciso implementar autenticação no meu app Next.js com Supabase"

COACH:
🎯 OBJETIVO DESTA ETAPA
Vamos estruturar um sistema de autenticação seguro e escalável.

📚 PERGUNTAS ESTRATÉGICAS:
1. Que métodos de auth você precisa? (Email/Password, OAuth, Magic Link)
2. Precisa de roles e permissões?
3. O app já tem Supabase configurado?
4. Preferência de UI library? (Shadcn, MUI, Chakra)
5. Quantos usuários simultâneos você espera?

[Após suas respostas]

🔍 ANÁLISE TÉCNICA
[Research de best practices, exemplos reais]

💻 IMPLEMENTAÇÃO
[Código estruturado em fases com explicações]

⚠️ CONSIDERAÇÕES
[Pitfalls, trade-offs, alternativas]

✅ VALIDAÇÃO
[Checklist de segurança e testes]

🚀 PRÓXIMOS PASSOS
[Melhorias e expansões futuras]
```

---

## 🎓 Casos de Uso

### ✨ Perfeito Para:

- 🆕 **Novos Projetos** - Estruturação desde o início
- 🏗️ **Arquitetura** - Design de sistemas complexos
- 🐛 **Debugging** - Diagnóstico sistemático
- 🔍 **Code Review** - Análise com checklist
- 📚 **Aprendizado** - Educação técnica contextual
- 🚀 **Refatoração** - Migração/modernização de código

### 🎯 Especialmente Útil Para:

- Desenvolvedores que querem seguir best practices
- Times que precisam de padrões consistentes
- Projetos que exigem qualidade production-ready
- Quem quer aprender enquanto desenvolve

---

## 🔧 Personalização

### Para Seu Time
Adicione na seção inicial do prompt:

```markdown
## 🏢 CONTEXTO DA EMPRESA
- Stack Padrão: Next.js 14, TypeScript, Tailwind, Supabase
- Code Style: ESLint + Prettier (config customizada)
- Review Process: 2 aprovações + CI/CD pass
- Deploy: Vercel (staging obrigatório antes de prod)
```

### Para Projeto Específico
```markdown
## 📦 CONTEXTO DO PROJETO
- Tipo: SaaS B2B multi-tenant
- Stack: [lista específica]
- Usuários: 5000+ simultâneos
- Compliance: GDPR, SOC2
```

---

## 📈 Métricas de Qualidade

### Código Aprovado Passa Por:

✅ TypeScript strict (zero `any`)  
✅ A11y WCAG AA (contraste 4.5:1)  
✅ Performance >90 (Lighthouse)  
✅ SEO otimizado  
✅ Segurança validada  
✅ Testes automatizados  
✅ Documentação completa  

---

## 🗺️ Roadmap Futuro

### Em Consideração:

- [ ] Exemplos de testes (Jest, Vitest, Playwright)
- [ ] Patterns de arquitetura (Clean, DDD)
- [ ] Troubleshooting guides
- [ ] Mini-tutorials para cada checklist item
- [ ] ESLint configs específicos
- [ ] Templates por stack (React Native, Angular, Vue)

---

## 📞 Suporte & Comunidade

### Problemas Comuns

**🔴 "Coach não segue metodologia"**
- Verifique se colou o prompt completo
- Reforce: "Siga o processo 4W passo a passo"

**🔴 "Respostas muito genéricas"**
- Forneça mais contexto específico
- Use: "Baseie-se no knowledge base técnico"

**🔴 "Pula etapas de validação"**
- Explicitamente peça: "Aplique o checklist de qualidade"

---

## 📚 Documentação Complementar

### Leitura Recomendada

1. **`system-prompt-dev-coach.md`** - Prompt completo
   - Quando: Primeiro contato, referência completa

2. **`guia-de-uso.md`** - Como usar em diferentes tools
   - Quando: Setup inicial em Cursor/Claude/ChatGPT

3. **`resumo-adicoes.md`** - O que foi adicionado
   - Quando: Quer entender estrutura e recursos

4. **`system-prompt-resumido.md`** - Versão condensada
   - Quando: Limite de tokens ou referência rápida

5. **`CLAUDE.md`** - Guia específico para Claude Code
   - Quando: Usar com Claude Code AI assistant

6. **`CONTRIBUTING.md`** - Guia de contribuição
   - Quando: Quer contribuir com o projeto

### 📖 Exemplos Práticos

Explore os exemplos detalhados em [`examples/`](examples/):

- **[nextjs-auth-example.md](examples/nextjs-auth-example.md)** - Autenticação completa Next.js + Supabase
- **[i18n-implementation-example.md](examples/i18n-implementation-example.md)** - Internacionalização em React

### 📋 Templates

Use os templates em [`templates/`](templates/):

- **[project-kickoff-template.md](templates/project-kickoff-template.md)** - Planejamento de novos projetos
- **[code-review-template.md](templates/code-review-template.md)** - Checklist completo de code review

### 🔧 Scripts Úteis

```bash
# Instalar dependências (opcional, para linting/formatting)
npm install

# Validar traduções i18n
npm run validate:translations public/locales

# Validar JSON
npm run validate:json file1.json file2.json

# Formatar markdown
npm run format:write
```

---

## 🎉 Começe Agora!

### 3 Passos Simples:

1. **📥 Escolha sua tool** (Cursor, Claude, ChatGPT, etc)
2. **📋 Cole o prompt** (use `system-prompt-dev-coach.md`)
3. **💬 Comece conversando** ("Quero criar [X]")

O coach guiará você através da metodologia 4W+ automaticamente!

---

## 📄 Licença e Uso

Este kit é fornecido como ferramenta educacional e de produtividade.

✅ **Permitido:**
- Uso pessoal e comercial
- Modificação para seu contexto
- Compartilhamento com seu time

💡 **Sugestão:**
Se modificar para criar versões especializadas (Mobile, Backend, etc), considere contribuir de volta!

---

## 🌟 Contribuições

Melhorias são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

**Áreas de interesse:**
- 📖 Exemplos práticos adicionais (Firebase Auth, GraphQL, etc.)
- 🔧 Scripts de automação e validação
- 🗂️ Templates para diferentes cenários
- 🌍 Traduções (EN, ES, FR)
- 📚 Troubleshooting guides
- 🔌 Integração com ferramentas específicas

**Como contribuir:**
1. Fork o repositório
2. Crie sua branch (`git checkout -b feature/meu-exemplo`)
3. Faça commit (`git commit -m 'feat: adiciona exemplo de GraphQL'`)
4. Push para a branch (`git push origin feature/meu-exemplo`)
5. Abra um Pull Request

Veja exemplos e ideias em [CONTRIBUTING.md](CONTRIBUTING.md).

---

**Versão:** 1.0.0  
**Última Atualização:** Outubro 2025  
**Autor:** Development Coach Team  

---

## 🎯 Próximo Passo

👉 **Abra `guia-de-uso.md` e escolha sua ferramenta para começar!**

---

✨ **Happy Coding with AI Coaching!** ✨
