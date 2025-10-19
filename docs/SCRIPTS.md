# 🔧 Documentação Detalhada dos Scripts

> Referência completa para os scripts de validação e automação do projeto

## 📑 Índice

- [Visão Geral](#visão-geral)
- [validate-translations.js](#validate-translationsjs)
- [NPM Scripts](#npm-scripts)
- [Estruturas Esperadas](#estruturas-esperadas)
- [Mensagens de Erro](#mensagens-de-erro)
- [Criando Novos Scripts](#criando-novos-scripts)

---

## Visão Geral

Este projeto possui **6 scripts npm** e **1 script Node.js customizado** para garantir qualidade e consistência da documentação e traduções.

### Scripts Disponíveis

| Script                  | Tipo         | Propósito                    | CI/CD |
| ----------------------- | ------------ | ---------------------------- | ----- |
| `validate:translations` | Node.js file | Valida traduções i18n        | ✅    |
| `validate:json`         | Inline       | Valida sintaxe JSON          | ✅    |
| `lint:md`               | markdownlint | Valida estilo markdown       | ✅    |
| `format:check`          | prettier     | Verifica formatação          | ✅    |
| `format:write`          | prettier     | Aplica formatação            | ❌    |
| `test`                  | Composite    | Valida JSON + formatação     | ✅    |

---

## validate-translations.js

### Localização

`scripts/validate-translations.js`

### Propósito

Valida a completude e consistência de arquivos de tradução i18n organizados em estrutura de pastas por idioma.

### Algoritmo

```text
1. Lê diretório de locales fornecido como argumento
2. Para cada subdiretório (idioma):
   a. Lista todos os arquivos .json (namespaces)
   b. Extrai todas as chaves (incluindo aninhadas via dot notation)
   c. Armazena mapa: { idioma: { namespace: [keys] } }
3. Compara todos os idiomas entre si:
   a. Identifica namespaces faltantes
   b. Identifica chaves faltantes em cada namespace
   c. Identifica chaves extras (que não existem em outros idiomas)
4. Gera relatório colorido no terminal
5. Exit code 0 (sucesso) ou 1 (erros encontrados)
```

### Estrutura de Entrada Esperada

```text
locales/
├── en/
│   ├── common.json
│   ├── errors.json
│   └── validation.json
├── pt/
│   ├── common.json
│   ├── errors.json
│   └── validation.json
└── es/
    ├── common.json
    ├── errors.json
    └── validation.json
```

### Formato JSON Aceito

#### Flat Structure

```json
{
  "welcome": "Welcome",
  "goodbye": "Goodbye"
}
```

#### Nested Structure (Convertido para Dot Notation)

```json
{
  "auth": {
    "login": "Login",
    "logout": "Logout",
    "errors": {
      "invalid": "Invalid credentials"
    }
  }
}
```

**Chaves extraídas:**

- `auth.login`
- `auth.logout`
- `auth.errors.invalid`

### Uso

```bash
# Sintaxe
node scripts/validate-translations.js <caminho-para-locales>

# Exemplo
node scripts/validate-translations.js ./public/locales

# Via npm
npm run validate:translations ./public/locales
```

### Saída de Sucesso

```text
✅ en: 3 namespaces, 125 keys
✅ pt: 3 namespaces, 125 keys
✅ es: 3 namespaces, 125 keys

✅ All languages have consistent keys!
```

**Exit Code:** 0

### Saída de Erro

```text
❌ Validation failed!

Missing namespaces:
  pt: Missing namespace 'validation'
  es: Has extra namespace 'extra' not found in other languages

Missing or extra keys in 'common':
  pt: Missing keys: welcome
  es: Extra keys: bienvenida

❌ Found inconsistencies across languages
```

**Exit Code:** 1

### Mensagens de Erro Comuns

| Erro                            | Causa                             | Solução                                 |
| ------------------------------- | --------------------------------- | --------------------------------------- |
| `Cannot read directory`         | Caminho inválido                  | Verifique caminho fornecido             |
| `Missing namespace 'X'`         | Arquivo .json faltando            | Crie arquivo ou remova de outros idiomas|
| `Missing keys: X, Y`            | Chaves não traduzidas             | Adicione traduções faltantes            |
| `Extra keys: X`                 | Chaves apenas em um idioma        | Adicione em outros ou remova            |
| `Unexpected token in JSON`      | JSON malformado                   | Valide sintaxe JSON                     |

### Edge Cases Tratados

1. **Objetos Aninhados:** Converte para dot notation recursivamente
2. **Arrays:** Suportado, mas valores não são validados (apenas presença)
3. **JSON Malformado:** Catch e reporta com nome do arquivo e erro
4. **Diretórios Vazios:** Ignora silenciosamente
5. **Arquivos Não-JSON:** Ignora arquivos sem extensão .json

---

## NPM Scripts

### validate:json

**Comando:** `npm run validate:json <arquivos...>`

**Propósito:** Valida sintaxe JSON de um ou mais arquivos

**Implementação:**

```javascript
node -e "const fs = require('fs'); const files = process.argv.slice(1); files.forEach(f => { try { JSON.parse(fs.readFileSync(f, 'utf8')); console.log('✅', f); } catch(e) { console.error('❌', f, e.message); process.exit(1); } })"
```

**Uso:**

```bash
# Arquivo único
npm run validate:json package.json

# Múltiplos arquivos
npm run validate:json package.json tsconfig.json examples/example.json

# Com globbing (via shell)
npm run validate:json examples/*.json
```

**Saída:**

```text
✅ package.json
✅ tsconfig.json
✅ examples/example.json
```

**Exit Code:**

- `0` - Todos os arquivos válidos
- `1` - Pelo menos um arquivo inválido

---

### lint:md

**Comando:** `npm run lint:md`

**Propósito:** Valida estilo e formatação de arquivos markdown

**Ferramenta:** [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)

**Configuração:** Usa regras padrão (sem arquivo de config customizado)

**Arquivos Verificados:** Todos os `.md` exceto `node_modules/`

**Uso:**

```bash
npm run lint:md
```

**Regras Principais Aplicadas:**

| Regra      | Descrição                             |
| ---------- | ------------------------------------- |
| MD001      | Hierarquia de headings                |
| MD003      | Estilo de heading consistente         |
| MD004      | Estilo de lista consistente           |
| MD022      | Headings devem ter linha em branco    |
| MD034      | Não usar URLs nuas (bare URLs)        |

**Saída de Erro:**

```text
INSTALACAO.md:36:80 MD009/no-trailing-spaces Trailing spaces
INSTALACAO.md:142:1 MD022/blanks-around-headings/blanks-around-headers Headings should be surrounded by blank lines
README.md:10:1 MD041/first-line-heading/first-line-h1 First line in a file should be a top-level heading
```

**Ignorar Regras:**

Crie `.markdownlint.json`:

```json
{
  "MD013": false,
  "MD034": false
}
```

---

### format:check

**Comando:** `npm run format:check`

**Propósito:** Verifica se arquivos estão formatados corretamente (sem modificar)

**Ferramenta:** [prettier](https://prettier.io/)

**Configuração:** `.prettierrc`

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "avoid",
  "proseWrap": "always",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "proseWrap": "preserve"
      }
    }
  ]
}
```

**Arquivos Verificados:** `**/*.{md,json}`

**Uso:**

```bash
# Verificar todos
npm run format:check

# Via CI/CD
npm run format:check || exit 1
```

**Saída:**

```text
Checking formatting...
INSTALACAO.md
package.json
All matched files use Prettier code style!
```

**Exit Code:**

- `0` - Todos os arquivos formatados corretamente
- `1` - Pelo menos um arquivo precisa formatação

---

### format:write

**Comando:** `npm run format:write`

**Propósito:** Aplica formatação automaticamente nos arquivos

**Uso:**

```bash
npm run format:write
```

**Saída:**

```text
INSTALACAO.md 56ms
package.json 12ms
README.md 34ms
```

**⚠️ Atenção:** Modifica arquivos! Sempre commit antes de rodar.

---

### test

**Comando:** `npm test`

**Propósito:** Script composto que executa validações essenciais

**Implementação:**

```json
"test": "npm run validate:json && npm run format:check"
```

**O Que Valida:**

1. ✅ Sintaxe JSON de todos os arquivos .json
2. ✅ Formatação de .md e .json via prettier

**Uso:**

```bash
# Localmente
npm test

# Em CI/CD
npm test || exit 1
```

**Exit Code:**

- `0` - Todos os checks passaram
- `1` - Pelo menos um check falhou

---

## Estruturas Esperadas

### Estrutura de Projeto

```text
dev-coach-prompts/
├── .prettierrc              # Config do prettier
├── package.json             # Definição dos scripts
├── scripts/
│   └── validate-translations.js
├── public/
│   └── locales/
│       ├── en/
│       │   └── *.json
│       ├── pt/
│       │   └── *.json
│       └── es/
│           └── *.json
├── docs/
│   ├── *.md
│   └── *.json
├── examples/
│   └── *.md
└── templates/
    └── *.md
```

### Estrutura de Namespace i18n

#### Simples (Flat)

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

#### Complexa (Nested)

```json
{
  "section1": {
    "subsection": {
      "key": "value"
    }
  },
  "section2": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

#### Com Arrays

```json
{
  "list": ["item1", "item2", "item3"],
  "nested": {
    "list": ["a", "b"]
  }
}
```

---

## Mensagens de Erro

### validate-translations.js

| Erro                                      | Significado                             | Ação                               |
| ----------------------------------------- | --------------------------------------- | ---------------------------------- |
| `Cannot read directory: ENOENT`           | Diretório não encontrado                | Verificar caminho                  |
| `Missing namespace 'common'`              | Arquivo common.json faltando            | Criar arquivo                      |
| `Extra namespace 'extra'`                 | Arquivo existe só em um idioma          | Adicionar em outros ou remover     |
| `Missing keys: welcome, goodbye`          | Chaves não traduzidas                   | Adicionar traduções                |
| `Extra keys: bienvenida`                  | Chave existe só em um idioma            | Adicionar em outros ou remover     |
| `Unexpected token < in JSON at position`  | JSON malformado                         | Validar sintaxe                    |

### validate:json

| Erro                           | Significado             | Ação                   |
| ------------------------------ | ----------------------- | ---------------------- |
| `Unexpected token`             | JSON inválido           | Corrigir sintaxe       |
| `Unexpected end of JSON input` | JSON incompleto         | Completar estrutura    |
| `ENOENT: no such file`         | Arquivo não encontrado  | Verificar caminho      |

### lint:md

| Erro                    | Significado                         | Ação                          |
| ----------------------- | ----------------------------------- | ----------------------------- |
| `MD001`                 | Heading hierarchy incorreta         | Ajustar níveis de headings    |
| `MD009`                 | Trailing spaces                     | Remover espaços finais        |
| `MD022`                 | Headings sem linhas em branco       | Adicionar linhas em branco    |
| `MD034`                 | URL nua (sem markdown link)         | Usar [texto](url)             |

### format:check

| Erro                              | Significado                 | Ação                     |
| --------------------------------- | --------------------------- | ------------------------ |
| `Code style issues found`         | Formatação inconsistente    | Rodar format:write       |
| `[error] file.md: SyntaxError`    | Sintaxe inválida            | Corrigir sintaxe         |

---

## Criando Novos Scripts

### Template para Script de Validação

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
};

function validate(targetPath) {
  try {
    // Sua lógica de validação aqui

    const results = {
      passed: true,
      errors: [],
      warnings: [],
    };

    // Processar arquivos...

    // Reportar resultados
    if (results.errors.length > 0) {
      console.error(`${colors.red}❌ Validation failed!${colors.reset}`);
      results.errors.forEach(err => {
        console.error(`${colors.red}  ${err}${colors.reset}`);
      });
      process.exit(1);
    }

    if (results.warnings.length > 0) {
      results.warnings.forEach(warn => {
        console.warn(`${colors.yellow}⚠️  ${warn}${colors.reset}`);
      });
    }

    console.log(`${colors.green}✅ Validation passed!${colors.reset}`);
    process.exit(0);

  } catch (error) {
    console.error(`${colors.red}❌ Error: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// Parse argumentos
const targetPath = process.argv[2];

if (!targetPath) {
  console.error('Usage: node script-name.js <path>');
  process.exit(1);
}

validate(targetPath);
```

### Adicionar ao package.json

```json
{
  "scripts": {
    "validate:custom": "node scripts/validate-custom.js"
  }
}
```

### Best Practices

1. **Exit Codes:**
   - `0` = Sucesso
   - `1` = Erro de validação
   - `2` = Erro de uso (argumentos inválidos)

2. **Output:**
   - Use cores ANSI para clareza
   - Sempre reset cores após uso
   - Forneça mensagens claras e acionáveis

3. **Performance:**
   - Use `fs.promises` para operações assíncronas
   - Evite operações síncronas em loops
   - Cache resultados quando possível

4. **Robustez:**
   - Valide argumentos de entrada
   - Use try-catch para erros de I/O
   - Forneça mensagens de erro detalhadas

---

## FAQ

### 1. Como adicionar novo idioma às traduções?

```bash
# 1. Crie diretório do idioma
mkdir -p public/locales/fr

# 2. Copie namespaces de outro idioma
cp public/locales/en/*.json public/locales/fr/

# 3. Traduza os valores (não as chaves!)

# 4. Valide
npm run validate:translations ./public/locales
```

### 2. Como ignorar regra específica do markdownlint?

Crie `.markdownlint.json`:

```json
{
  "MD013": false,
  "MD034": false
}
```

Ou use comentário inline:

```markdown
<!-- markdownlint-disable MD013 -->
Esta linha muito longa não vai gerar erro
<!-- markdownlint-enable MD013 -->
```

### 3. Como customizar formatação do Prettier?

Edite `.prettierrc`:

```json
{
  "printWidth": 120,
  "tabWidth": 4,
  "useTabs": true
}
```

### 4. Como rodar apenas em arquivos modificados?

```bash
# Com git
npm run format:write $(git diff --name-only --diff-filter=ACMR | grep -E '\.(md|json)$')

# Com lint-staged (recomendado)
npx lint-staged
```

---

## Troubleshooting

### Script não encontrado

```bash
# Erro
sh: markdownlint: command not found

# Solução
npm install
```

### Permissão negada

```bash
# Erro
EACCES: permission denied

# Solução
chmod +x scripts/*.js
```

### JSON parsing error

```bash
# Erro
Unexpected token < in JSON

# Causa comum
HTML retornado ao invés de JSON (ex: 404 page)

# Solução
Verificar conteúdo do arquivo
```

---

**Última Atualização:** 2025-10-19
**Versão:** 1.0.0
