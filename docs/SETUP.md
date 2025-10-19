# 🛠️ Guia de Setup do Ambiente de Desenvolvimento

> Setup completo para contribuidores e mantenedores do projeto

## 📑 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação Inicial](#instalação-inicial)
- [Configuração do Editor](#configuração-do-editor)
- [Git Hooks](#git-hooks)
- [Workflow de Desenvolvimento](#workflow-de-desenvolvimento)
- [Troubleshooting](#troubleshooting)

---

## Pré-requisitos

### Software Obrigatório

| Software   | Versão Mínima | Verificar Instalação | Download                      |
| ---------- | ------------- | -------------------- | ----------------------------- |
| **Node.js**| 14.0.0        | `node --version`     | https://nodejs.org            |
| **npm**    | 6.0.0         | `npm --version`      | (incluído com Node.js)        |
| **Git**    | 2.0.0         | `git --version`      | https://git-scm.com           |

### Software Recomendado

| Software           | Propósito                    | Download                     |
| ------------------ | ---------------------------- | ---------------------------- |
| **VSCode**         | Editor recomendado           | https://code.visualstudio.com|
| **nvm**            | Gerenciador de versões Node  | https://github.com/nvm-sh/nvm|
| **GitHub CLI**     | Operações Git facilitadas    | https://cli.github.com       |

---

## Instalação Inicial

### 1. Clone o Repositório

```bash
# Via HTTPS
git clone https://github.com/seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

# Via SSH (recomendado para contribuidores)
git clone git@github.com:seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

# Via GitHub CLI
gh repo clone seu-usuario/dev-coach-prompts
cd dev-coach-prompts
```

### 2. Instale Dependências

```bash
# Instalar dependências de desenvolvimento
npm install

# Verificar instalação
npm run
```

**Saída esperada:**

```text
Scripts available in dev-coach-prompts@1.0.0 via `npm run-script`:
  validate:translations
  validate:json
  lint:md
  format:check
  format:write
  test
```

### 3. Verifique o Ambiente

```bash
# Execute os testes
npm test

# Deve passar sem erros
# Saída esperada: ✅ All checks passed
```

---

## Configuração do Editor

### VSCode (Recomendado)

#### Extensões Obrigatórias

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "davidanson.vscode-markdownlint",
    "yzhang.markdown-all-in-one",
    "streetsidesoftware.code-spell-checker",
    "streetsidesoftware.code-spell-checker-portuguese-brazilian"
  ]
}
```

**Instalação:**

1. Crie `.vscode/extensions.json` com o conteúdo acima
2. VSCode sugerirá instalar as extensões automaticamente
3. Ou instale manualmente: `Cmd/Ctrl + Shift + X` → busque cada extensão

#### Settings do Workspace

Crie `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true
  },
  "files.associations": {
    "*.md": "markdown"
  },
  "markdown.extension.toc.levels": "2..6",
  "cSpell.language": "en,pt,pt_BR",
  "cSpell.words": [
    "cursorrules",
    "windsurfrules",
    "shadcn"
  ]
}
```

#### Snippets Úteis

Crie `.vscode/markdown.code-snippets`:

```json
{
  "Markdown Header 2": {
    "prefix": "h2",
    "body": ["## ${1:Title}", "", "$0"],
    "description": "Header 2 com espaçamento"
  },
  "Markdown Code Block": {
    "prefix": "code",
    "body": ["```${1:language}", "$2", "```", "", "$0"],
    "description": "Code block com linguagem"
  },
  "Markdown Table": {
    "prefix": "table",
    "body": [
      "| ${1:Header 1} | ${2:Header 2} |",
      "| ------------ | ------------ |",
      "| ${3:Cell 1}  | ${4:Cell 2}  |",
      "$0"
    ],
    "description": "Table 2x2"
  }
}
```

### Outros Editores

#### Vim/Neovim

```vim
" .vimrc ou init.vim
Plug 'prettier/vim-prettier'
Plug 'iamcco/markdown-preview.nvim'

" Auto-format on save
autocmd BufWritePre *.md,*.json PrettierAsync

" Spell check para PT/EN
set spell spelllang=pt,en
```

#### Sublime Text

```json
{
  "rulers": [100],
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true
}
```

---

## Git Hooks

### Setup com Husky

```bash
# Instalar husky
npm install --save-dev husky lint-staged

# Inicializar husky
npx husky init

# Criar pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
```

### Configuração lint-staged

Adicione ao `package.json`:

```json
{
  "lint-staged": {
    "*.md": [
      "prettier --write",
      "markdownlint --fix"
    ],
    "*.json": [
      "prettier --write"
    ]
  }
}
```

### Hooks Disponíveis

#### pre-commit

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."

# Format & lint
npx lint-staged

# Validate JSON
npm run validate:json package.json

echo "✅ Pre-commit checks passed!"
```

#### pre-push

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🚀 Running pre-push checks..."

# Run all tests
npm test

# Validate translations if directory exists
if [ -d "public/locales" ]; then
  npm run validate:translations public/locales
fi

echo "✅ Pre-push checks passed!"
```

#### commit-msg (Conventional Commits)

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Validate commit message format
commit_msg=$(cat "$1")

# Pattern: type(scope): message
pattern="^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,100}$"

if ! echo "$commit_msg" | grep -qE "$pattern"; then
  echo "❌ Invalid commit message format!"
  echo ""
  echo "Expected: type(scope): message"
  echo "Examples:"
  echo "  feat: add dark mode toggle"
  echo "  fix(i18n): correct translation keys"
  echo "  docs: update installation guide"
  exit 1
fi

echo "✅ Commit message valid"
```

---

## Workflow de Desenvolvimento

### 1. Criar Branch de Feature

```bash
# Atualizar main
git checkout main
git pull origin main

# Criar feature branch
git checkout -b feat/nome-da-feature

# Ou bugfix
git checkout -b fix/nome-do-bug

# Ou docs
git checkout -b docs/nome-da-doc
```

### 2. Fazer Modificações

```bash
# Edite arquivos...

# Verifique formatação (sem modificar)
npm run format:check

# Aplique formatação
npm run format:write

# Lint markdown
npm run lint:md

# Valide tudo
npm test
```

### 3. Commit Changes

```bash
# Stage changes
git add .

# Commit com mensagem conventional
git commit -m "feat: adiciona seção de troubleshooting"

# Pre-commit hook roda automaticamente:
# - Formata arquivos staged
# - Valida markdown
# - Valida JSON
```

### 4. Push & Pull Request

```bash
# Push para origin
git push -u origin feat/nome-da-feature

# Criar PR via GitHub CLI
gh pr create --title "Feat: Nova seção de troubleshooting" --body "Adiciona seção detalhada..."

# Ou criar via interface web
# https://github.com/seu-usuario/dev-coach-prompts/compare
```

### 5. Code Review

Após criar PR, automaticamente:

- ✅ CI/CD roda checks (format, lint, test)
- ✅ Reviewers são notificados
- ✅ Netlify deploy preview é criado

**Checklist do Revisor:**

- [ ] Código segue padrões do projeto
- [ ] Documentação atualizada
- [ ] Sem typos ou erros de português
- [ ] Links funcionam
- [ ] Exemplos testados
- [ ] CI/CD passa

### 6. Merge

```bash
# Após aprovação, fazer squash merge
gh pr merge --squash

# Ou via interface web
# Squash and merge → Confirm
```

---

## Estrutura de Branches

```text
main
├── feat/dark-mode-toggle
├── feat/i18n-support
├── fix/broken-links
├── docs/api-reference
└── chore/update-dependencies
```

### Convenções de Branch

| Prefixo       | Uso                                     | Exemplo                      |
| ------------- | --------------------------------------- | ---------------------------- |
| `feat/`       | Nova funcionalidade                     | `feat/add-search`            |
| `fix/`        | Correção de bug                         | `fix/broken-link`            |
| `docs/`       | Apenas documentação                     | `docs/setup-guide`           |
| `style/`      | Formatação, espaçamento                 | `style/prettier-config`      |
| `refactor/`   | Refatoração sem mudar comportamento     | `refactor/extract-function`  |
| `test/`       | Adicionar ou modificar testes           | `test/validate-script`       |
| `chore/`      | Tarefas de manutenção                   | `chore/update-deps`          |

---

## Conventional Commits

### Formato

```text
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type         | Descrição                          | Exemplo                              |
| ------------ | ---------------------------------- | ------------------------------------ |
| `feat`       | Nova funcionalidade                | `feat: add FAQ section`              |
| `fix`        | Correção de bug                    | `fix: correct typo in README`        |
| `docs`       | Apenas documentação                | `docs: update installation steps`    |
| `style`      | Formatação, ponto e vírgula        | `style: apply prettier`              |
| `refactor`   | Refatoração                        | `refactor: simplify validation`      |
| `test`       | Adicionar testes                   | `test: add script validation tests`  |
| `chore`      | Manutenção, config                 | `chore: update dependencies`         |

### Exemplos

```bash
# Feature simples
git commit -m "feat: add security section to installation guide"

# Com scope
git commit -m "fix(scripts): handle empty locale directories"

# Com body e footer
git commit -m "feat(i18n): add French translation

Add complete French translation for all namespaces:
- common.json
- errors.json
- validation.json

Closes #123"
```

---

## Scripts de Desenvolvimento

### Tarefas Comuns

```bash
# Antes de commitar
npm run format:write
npm run lint:md
npm test

# Validar traduções
npm run validate:translations ./public/locales

# Validar JSON específico
npm run validate:json package.json

# Ver todos os scripts
npm run
```

### Atalhos Úteis (package.json)

```json
{
  "scripts": {
    "dev": "npm run format:write && npm run lint:md",
    "precommit": "npm run dev && npm test",
    "check": "npm test && npm run lint:md"
  }
}
```

---

## Troubleshooting

### npm install falha

```bash
# Limpar cache
npm cache clean --force

# Deletar node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Prettier não formata

```bash
# Verificar se prettier está instalado
npm list prettier

# Reinstalar
npm install --save-dev prettier

# Forçar formatação
npx prettier --write "**/*.{md,json}"
```

### Git hooks não executam

```bash
# Verificar permissões
chmod +x .husky/*

# Reinstalar hooks
rm -rf .husky
npx husky init
```

### Markdownlint muitos erros

```bash
# Ver erros
npm run lint:md

# Auto-fix quando possível
npx markdownlint --fix '**/*.md'

# Ignorar regras específicas
# Crie .markdownlint.json com regras desabilitadas
```

### Conflitos de merge

```bash
# Atualizar sua branch com main
git checkout feat/sua-branch
git fetch origin
git rebase origin/main

# Resolver conflitos
# ... edite arquivos conflitantes ...

git add .
git rebase --continue

# Force push (cuidado!)
git push --force-with-lease
```

---

## Ambiente de CI/CD

### GitHub Actions

O projeto usa GitHub Actions para:

- ✅ Validar formatação
- ✅ Lint markdown
- ✅ Validar JSON
- ✅ Executar testes
- ✅ Deploy preview (Netlify)

### Rodando Localmente

```bash
# Simular CI/CD localmente
npm run format:check
npm run lint:md
npm test

# Se tudo passar, CI vai passar também
```

### Secrets Necessários

| Secret                | Uso                      | Onde Configurar         |
| --------------------- | ------------------------ | ----------------------- |
| `NETLIFY_AUTH_TOKEN`  | Deploy Netlify           | Repository Settings     |
| `NETLIFY_SITE_ID`     | Identificar site Netlify | Repository Settings     |

---

## Boas Práticas

### Commits

- ✅ Commits atômicos (uma mudança lógica por commit)
- ✅ Mensagens descritivas em português ou inglês consistente
- ✅ Usar conventional commits
- ❌ Não commitar arquivos gerados (node_modules, .env)
- ❌ Não commitar credenciais ou secrets

### Code Review

- ✅ Revisar com atenção aos detalhes
- ✅ Testar localmente se possível
- ✅ Dar feedback construtivo
- ✅ Aprovar apenas quando tudo estiver OK
- ❌ Não aprovar "só para passar"

### Documentação

- ✅ Atualizar docs quando mudar código
- ✅ Adicionar exemplos práticos
- ✅ Manter links atualizados
- ✅ Verificar ortografia (pt-BR)
- ❌ Não deixar TODOs na documentação principal

---

## Recursos Adicionais

### Links Úteis

- **Prettier Docs:** https://prettier.io/docs/en/
- **Markdownlint Rules:** https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md
- **Conventional Commits:** https://www.conventionalcommits.org/
- **Husky Guide:** https://typicode.github.io/husky/

### Documentação do Projeto

- [INSTALACAO.md](../INSTALACAO.md) - Guia de instalação
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Guia de contribuição
- [SCRIPTS.md](./SCRIPTS.md) - Documentação dos scripts
- [README.md](../README.md) - Visão geral do projeto

---

## FAQ

### 1. Qual editor devo usar?

**Recomendado:** VSCode com extensões listadas acima.

**Alternativas:** Vim, Sublime, qualquer editor com suporte a EditorConfig.

### 2. Preciso usar Git Hooks?

**Opcional para usuários.** **Recomendado para contribuidores.**

Git hooks garantem qualidade antes do commit.

### 3. Como testar mudanças localmente?

```bash
# Ver preview em tempo real (se usar markdown preview)
# VSCode: Cmd+Shift+V

# Ou abra os .md diretamente no GitHub Desktop
```

### 4. Posso usar npm em vez de yarn/pnpm?

**Sim.** O projeto usa npm oficialmente.

Yarn e pnpm também funcionam, mas mantenha apenas um lock file.

### 5. Como adiciono nova dependência?

```bash
# Dev dependency
npm install --save-dev nome-do-pacote

# Production (se aplicável)
npm install nome-do-pacote

# Commit package.json e package-lock.json
git add package*.json
git commit -m "chore: add nome-do-pacote dependency"
```

---

**Última Atualização:** 2025-10-19
**Versão:** 1.0.0
**Mantenedores:** Development Coach Team
