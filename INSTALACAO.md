# 🚀 Guia de Instalação e Configuração

> **Tempo estimado:** 10-15 minutos | **Nível:** Iniciante

## 📑 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração por Ferramenta](#️-configuração-por-ferramenta)
  - [Cursor IDE](#-cursor-ide)
  - [Claude Projects](#-claude-projects)
  - [ChatGPT Custom GPT](#-chatgpt-custom-gpt)
  - [Windsurf / Outros IDEs](#-windsurf--outros-ides)
- [Configuração Multiplataforma](#-configuração-multiplataforma)
- [Considerações de Segurança](#-considerações-de-segurança)
- [Verificação da Instalação](#-verificação-da-instalação)
- [Scripts Úteis](#-scripts-úteis-opcional)
- [Troubleshooting](#-troubleshooting)
- [Perguntas Frequentes (FAQ)](#-perguntas-frequentes-faq)
- [Próximos Passos](#-próximos-passos)
- [Suporte](#-suporte)

---

## 📦 Pré-requisitos

### Requisitos Mínimos (Para Usar os Prompts)

- **Editor de texto ou IDE** (Cursor, VSCode, etc.)
- **AI Assistant** (Cursor, Claude, ChatGPT, etc.)
- **Git** (opcional - apenas para clonar o repositório)

### Requisitos Opcionais (Para Desenvolvimento/Validação)

- **Node.js >= 14.0.0** ⚠️ **OPCIONAL** - apenas para scripts de validação e linting
  - Se não tiver instalado: <https://nodejs.org/>
  - Se não quiser instalar: Você ainda pode usar os prompts normalmente
- **npm** (incluído com Node.js)

---

## 📥 Instalação

### Opção 1: Clone via Git

#### macOS / Linux

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

# (Opcional) Instale dependências para scripts de validação
npm install
```

#### Windows (PowerShell)

```powershell
# Clone o repositório
git clone https://github.com/seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

# (Opcional) Instale dependências para scripts de validação
npm install
```

#### Windows (Command Prompt)

```cmd
REM Clone o repositório
git clone https://github.com/seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

REM (Opcional) Instale dependências para scripts de validação
npm install
```

### Opção 2: Download ZIP

1. Baixe o ZIP do repositório
2. Extraia para uma pasta local
3. Navegue até a pasta

### Opção 3: npm (Futuro)

```bash
# Quando publicado no npm
npm install -g dev-coach-prompts
```

---

## ⚙️ Configuração por Ferramenta

### 🎯 Cursor IDE

#### macOS / Linux

1. **Copie o prompt principal:**

   ```bash
   # Para configuração global
   cp system-prompt-dev-coach.md ~/.cursor/.cursorrules

   # OU para projeto específico
   cp system-prompt-dev-coach.md .cursorrules
   ```

2. **Ou crie manualmente:**
   - Abra seu projeto no Cursor
   - Crie arquivo `.cursorrules` na raiz
   - Cole o conteúdo de `system-prompt-dev-coach.md`

3. **Teste:**
   - Abra o Cursor Chat (Cmd/Ctrl + L)
   - Digite: "Preciso implementar autenticação"
   - O coach deve seguir a metodologia 4W+

#### Windows (PowerShell)

```powershell
# Para configuração global
Copy-Item system-prompt-dev-coach.md $env:USERPROFILE\.cursor\.cursorrules

# OU para projeto específico
Copy-Item system-prompt-dev-coach.md .cursorrules
```

#### Windows (Command Prompt)

```cmd
REM Para projeto específico
copy system-prompt-dev-coach.md .cursorrules
```

---

### 🤖 Claude Projects

1. **Crie um novo Project em <https://claude.ai>**

2. **Adicione conhecimento:**
   - Vá em "Project Knowledge"
   - Faça upload dos arquivos:
     - `system-prompt-dev-coach.md`
     - `system-prompt-resumido.md` (opcional)
     - `resumo-adicoes.md` (opcional)

3. **Configure instruções:**
   - Vá em "Custom Instructions"
   - Cole:

     ```text
     Siga as diretrizes do system-prompt-dev-coach.md para todas
     as interações de desenvolvimento. Use a metodologia 4W+ sempre
     que iniciar uma nova tarefa.
     ```

4. **Teste:**
   - Inicie conversa: "Quero criar um dashboard"
   - Deve fazer perguntas estratégicas primeiro

---

### 💬 ChatGPT Custom GPT

1. **Acesse:** <https://chat.openai.com/gpts/editor>

2. **Create a GPT:**
   - Name: "Development Coach"
   - Description: "Expert development coach using 4W+ methodology"

3. **Configure:**
   - Cole `system-prompt-dev-coach.md` em **Instructions**
   - Adicione **Conversation starters:**
     - "Preciso implementar [feature]"
     - "Como estruturo um projeto de [tipo]?"
     - "Revise este código seguindo o checklist"

4. **Upload Knowledge (opcional):**
   - `resumo-adicoes.md`
   - Templates e exemplos

5. **Save & Test**

---

### 🌊 Windsurf / Outros IDEs

1. **Identifique onde colocar system prompts:**
   - Windsurf: `.windsurfrules`
   - Outros: Verifique documentação

2. **Cole o conteúdo de:**
   - `system-prompt-dev-coach.md` (completo)
   - Ou `system-prompt-resumido.md` (se limite de tokens)

---

## 💻 Configuração Multiplataforma

### Tabela de Caminhos por Sistema Operacional

| Sistema Operacional | Cursor Global Config                 | Projeto Local  | Separador de Path |
| ------------------- | ------------------------------------ | -------------- | ----------------- |
| **macOS**           | `~/.cursor/.cursorrules`             | `.cursorrules` | `/`               |
| **Linux**           | `~/.cursor/.cursorrules`             | `.cursorrules` | `/`               |
| **Windows**         | `%USERPROFILE%\.cursor\.cursorrules` | `.cursorrules` | `\`               |

### Comandos de Cópia por Plataforma

#### macOS / Linux

```bash
# Copiar para configuração global
cp system-prompt-dev-coach.md ~/.cursor/.cursorrules

# Copiar para projeto
cp system-prompt-dev-coach.md .cursorrules

# Verificar instalação
cat .cursorrules | head -n 5
```

#### Windows PowerShell

```powershell
# Copiar para configuração global
Copy-Item system-prompt-dev-coach.md $env:USERPROFILE\.cursor\.cursorrules

# Copiar para projeto
Copy-Item system-prompt-dev-coach.md .cursorrules

# Verificar instalação
Get-Content .cursorrules | Select-Object -First 5
```

#### Windows Command Prompt

```cmd
REM Copiar para projeto
copy system-prompt-dev-coach.md .cursorrules

REM Verificar instalação
type .cursorrules | more
```

---

## 🔒 Considerações de Segurança

### ⚠️ IMPORTANTE: Proteção de Credenciais

**NUNCA inclua chaves de API ou credenciais nos arquivos de configuração:**

❌ **EVITE:**

```bash
# .cursorrules (NÃO FAÇA ISSO)
OPENAI_API_KEY=sk-1234567890abcdef...
ANTHROPIC_API_KEY=sk-ant-api-key-here...
```

✅ **USE VARIÁVEIS DE AMBIENTE:**

```bash
# .env (ADICIONE AO .gitignore)
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key
CURSOR_API_KEY=your-cursor-key
```

### Boas Práticas de Segurança

#### 1. Adicione `.env` ao `.gitignore`

```bash
# Certifique-se de que .env não será commitado
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.*.local" >> .gitignore
```

#### 2. Use Chaves Individuais por Membro do Time

- Facilita auditoria e rastreamento
- Reduz impacto de chave comprometida
- Permite revogação individual

#### 3. Configure Restrições de API (quando disponível)

- **Limite por IP:** Restrinja uso a IPs conhecidos
- **Limite por domínio:** Configure referrer restrictions
- **Rate limiting:** Estabeleça limites de uso

#### 4. Rotacione Chaves Periodicamente

- **Mensalmente** para projetos ativos
- **Imediatamente** se suspeita de vazamento
- Use gerenciadores de senhas para armazenar chaves antigas

#### 5. Monitore Uso de APIs

- Configure alertas de uso anormal
- Revise logs de acesso regularmente
- Estabeleça quotas e limites

### 🚨 Em Caso de Vazamento de Chave

**Ação Imediata:**

1. **Revogue imediatamente** a chave exposta no painel do provedor
2. **Gere nova chave** e atualize configurações
3. **Atualize** todas as referências à chave
4. **Revise logs** para identificar uso não autorizado
5. **Considere** rodar `git-secrets` ou ferramentas similares
6. **Notifique** equipe e stakeholders se necessário

### 🛡️ Checklist de Segurança Pós-Instalação

- [ ] **Credenciais protegidas**
  - [ ] Nenhuma API key em código-fonte
  - [ ] `.env` adicionado ao `.gitignore`
  - [ ] Variáveis de ambiente configuradas
  - [ ] Chaves individuais por desenvolvedor
- [ ] **Controle de Acesso**
  - [ ] Restrições de IP configuradas (se disponível)
  - [ ] Rate limiting habilitado
  - [ ] Logs de acesso ativos
- [ ] **Configuração**
  - [ ] Arquivos de config com permissões corretas (`chmod 600`)
  - [ ] Backup de configurações críticas
  - [ ] Documentação de secrets em local seguro (1Password, Vault)
- [ ] **Monitoramento**
  - [ ] Alertas de uso anormal configurados
  - [ ] Revisão periódica de logs agendada
  - [ ] Plano de resposta a incidentes definido

---

## ✅ Verificação da Instalação

### Teste Básico (Usuários)

Faça esta pergunta ao seu AI assistant:

```text
"Preciso implementar autenticação no meu app.
Qual seria a primeira coisa que você precisa saber?"
```

**✅ Resposta esperada:** O coach deve fazer perguntas estratégicas seguindo o framework 4W+, não implementar diretamente.

**❌ Se não funcionar:** Veja seção [Troubleshooting](#-troubleshooting).

---

### Teste do Checklist

```text
"Revise este código seguindo o checklist de qualidade"
[cole algum código]
```

**✅ Resposta esperada:** Análise organizada por categorias (A11y, SEO, Performance, etc.)

---

### Verificação para Desenvolvedores (com npm)

Se instalou as dependências de desenvolvimento:

```bash
# Verifique que Node.js está instalado
node --version
# Saída esperada: v14.0.0 ou superior

# Verifique que npm está instalado
npm --version
# Saída esperada: 6.0.0 ou superior

# Liste os scripts disponíveis
npm run
# Deve listar: validate:translations, validate:json, lint:md, format:check, format:write, test

# Execute teste básico
npm test
# Deve passar sem erros
```

**Indicadores de Sucesso:**

- ✅ Todos os comandos executam sem erro
- ✅ `npm test` retorna exit code 0
- ✅ Scripts estão listados em `npm run`

---

## 🔧 Scripts Úteis (Opcional)

**Pré-requisito:** Node.js instalado + `npm install` executado.

### Referência Completa de Scripts

| Script                    | Comando                                | Descrição                                    | Quando Usar              |
| ------------------------- | -------------------------------------- | -------------------------------------------- | ------------------------ |
| **validate:translations** | `npm run validate:translations <path>` | Valida completude de traduções i18n          | Após modificar traduções |
| **validate:json**         | `npm run validate:json <files>`        | Valida sintaxe de arquivos JSON              | Antes de commit          |
| **lint:md**               | `npm run lint:md`                      | Valida qualidade dos arquivos markdown       | Antes de commit          |
| **format:check**          | `npm run format:check`                 | Verifica formatação sem modificar            | Em CI/CD                 |
| **format:write**          | `npm run format:write`                 | Aplica formatação automaticamente            | Durante desenvolvimento  |
| **test**                  | `npm test`                             | Executa validação JSON + check de formatação | Antes de PR              |

### Exemplos de Uso

#### Validar Traduções i18n

```bash
npm run validate:translations ./public/locales
```

**Saída esperada:**

```text
✅ en: 2 namespaces, 45 keys
✅ pt: 2 namespaces, 45 keys
✅ All languages have consistent keys!
```

#### Validar Sintaxe JSON

```bash
npm run validate:json package.json examples/*.json
```

**Saída esperada:**

```text
✅ package.json
✅ examples/example1.json
```

#### Lint Markdown

```bash
npm run lint:md
```

**Saída se houver problemas:**

```text
INSTALACAO.md:35:29 MD034/no-bare-urls Bare URL used
```

#### Verificar Formatação

```bash
# Apenas verificar (não modifica arquivos)
npm run format:check

# Aplicar formatação automaticamente
npm run format:write
```

#### Executar Todos os Testes

```bash
npm test
```

**Equivalente a:**

```bash
npm run validate:json && npm run format:check
```

---

### Workflow de Desenvolvimento Recomendado

```bash
# 1. Faça suas modificações nos arquivos .md ou .json

# 2. Antes de commitar, execute:
npm run format:write   # Formata automaticamente
npm run lint:md        # Valida estilo markdown
npm test               # Valida JSON e formatação

# 3. Se tudo passar, faça o commit
git add .
git commit -m "feat: adiciona nova documentação"
```

---

## 🐛 Troubleshooting

### 🔴 Crítico: Coach Não Responde ou Dá Erro

**Sintomas:**

- AI assistant não reconhece o prompt
- Mensagens de erro ao carregar configuração
- Comportamento completamente diferente do esperado

**Causas Prováveis:**

1. Arquivo corrompido ou incompleto
2. Formato markdown inválido
3. Limite de contexto excedido

**Solução:**

1. **Verifique integridade do arquivo:**

   ```bash
   # macOS/Linux - Deve retornar ~35000 caracteres
   wc -c system-prompt-dev-coach.md

   # Windows PowerShell
   (Get-Item system-prompt-dev-coach.md).length
   ```

2. **Valide markdown (se npm instalado):**

   ```bash
   npm run format:check
   npm run lint:md
   ```

3. **Tente versão resumida:**

   ```bash
   # macOS/Linux
   cp system-prompt-resumido.md .cursorrules

   # Windows
   copy system-prompt-resumido.md .cursorrules
   ```

**Verificação:**
Teste com: "Explique a metodologia 4W+"

**Se não resolver:**

- Reporte issue com detalhes: <https://github.com/.../issues>
- Inclua: versão da tool, sistema operacional, tamanho do arquivo

---

### 🟡 Atenção: Metodologia Não É Seguida Consistentemente

**Sintomas:**

- Coach pula etapas de discovery
- Vai direto para implementação
- Não usa checklist de qualidade

**Causas Prováveis:**

1. Prompt não carregado completamente
2. Contexto anterior interferindo
3. Comando muito direto ("faça X")

**Solução:**

1. **Recarregue configuração:**
   - Reinicie o IDE/ferramenta
   - Limpe cache se disponível

2. **Inicie nova conversa/sessão:**
   - Cursor: Nova janela de chat
   - Claude: Novo chat
   - ChatGPT: New chat

3. **Reforce explicitamente:**

   ```text
   "Siga a metodologia 4W+ completa.
   Comece com perguntas de discovery antes de implementar."
   ```

**Verificação:**
Coach deve fazer 5-7 perguntas estratégicas antes de propor solução.

---

### 🟡 Atenção: Performance Lenta ou Respostas Incompletas

**Sintomas:**

- Demora excessiva para responder (>30s)
- Respostas cortadas no meio
- Timeout errors

**Causas Prováveis:**

1. Contexto muito grande acumulado
2. Arquivo de prompt muito extenso
3. Limite de tokens da API

**Solução:**

1. **Use versão resumida:**

   ```bash
   cp system-prompt-resumido.md .cursorrules
   ```

2. **Limpe histórico de conversa:**
   - Inicie novo chat
   - Reduza contexto fornecido

3. **Divida tarefas grandes em menores:**
   - Em vez de "Implemente autenticação completa"
   - Use "Implemente login básico" → depois "Adicione recuperação de senha"

**Verificação:**
Respostas completas em < 10 segundos

---

### 🟢 Menor: Emojis Não Aparecem Corretamente

**Sintoma:**

- Quadrados ou caracteres estranhos no lugar de emojis

**Causa:**

- Encoding do arquivo incorreto

**Solução:**

```bash
# macOS/Linux - Converta para UTF-8
iconv -f ISO-8859-1 -t UTF-8 system-prompt-dev-coach.md > temp.md
mv temp.md system-prompt-dev-coach.md

# Windows PowerShell
Get-Content system-prompt-dev-coach.md | Set-Content -Encoding UTF8 temp.md
Move-Item -Force temp.md system-prompt-dev-coach.md
```

---

### 🟢 Menor: npm install Falhou

**Sintomas:**

- Erros durante `npm install`
- Dependências não instaladas

**Solução:**

1. **Verifique versão do Node.js:**

   ```bash
   node --version
   # Deve ser >= 14.0.0
   ```

2. **Limpe cache do npm:**

   ```bash
   npm cache clean --force
   ```

3. **Delete e reinstale:**

   ```bash
   # macOS/Linux
   rm -rf node_modules package-lock.json
   npm install

   # Windows
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   ```

---

### 📊 Diagnostic Checklist

Se nenhuma solução acima funcionar, verifique:

- [ ] Versão da tool está atualizada
- [ ] Arquivo `.cursorrules` está na raiz do projeto
- [ ] Não há caracteres especiais no caminho do arquivo
- [ ] API keys configuradas corretamente (se aplicável)
- [ ] Permissões de leitura no arquivo (`chmod 644` ou superior)
- [ ] Espaço em disco disponível
- [ ] Conexão de internet estável (para APIs cloud)

---

## ❓ Perguntas Frequentes (FAQ)

### 1. Preciso instalar Node.js para usar os prompts?

**❌ NÃO.** Node.js é **completamente opcional**.

- **Para usar os prompts:** Apenas copie os arquivos `.md` para seu AI assistant
- **Para desenvolvimento/validação:** Node.js é útil para rodar scripts de linting e formatação

### 2. Qual versão devo usar: `system-prompt-dev-coach.md` ou `system-prompt-resumido.md`?

| Versão                           | Tamanho | Quando Usar                         |
| -------------------------------- | ------- | ----------------------------------- |
| **`system-prompt-dev-coach.md`** | ~35KB   | Uso normal, contexto suficiente     |
| **`system-prompt-resumido.md`**  | ~4KB    | Limite de tokens, performance lenta |

**Recomendação:** Comece com a versão completa. Mude para resumida apenas se tiver problemas.

### 3. Posso usar em vários projetos simultaneamente?

**✅ SIM.** Existem duas abordagens:

**Opção 1: Configuração Global**

```bash
# Aplica para todos os projetos que não têm .cursorrules local
cp system-prompt-dev-coach.md ~/.cursor/.cursorrules
```

**Opção 2: Por Projeto**

```bash
# Cada projeto tem seu próprio .cursorrules
cd /caminho/para/projeto
cp system-prompt-dev-coach.md .cursorrules
```

**Ordem de Precedência:** Projeto local > Global

### 4. Como atualizo para novas versões?

**Se instalou via git:**

```bash
cd dev-coach-prompts
git pull origin main
# Depois copie novamente para .cursorrules
```

**Se baixou ZIP:**

- Baixe nova versão
- Substitua arquivos antigos

### 5. Posso personalizar o prompt para minha empresa?

**✅ SIM, totalmente recomendado!**

Adicione seção de contexto no topo do arquivo:

```markdown
# CONTEXTO DA EMPRESA

**Stack Padrão:**

- Frontend: React + TypeScript + TailwindCSS
- Backend: Node.js + PostgreSQL
- Cloud: AWS

**Padrões de Código:**

- ESLint config: ./eslintrc.js
- Prettier config: ./prettierrc
- Testes: Jest + Testing Library

**Processo de Review:**

1. PR template obrigatório
2. Minimum 1 approval
3. CI deve passar
```

### 6. Funciona offline?

| Ferramenta  | Offline?   | Observações                                        |
| ----------- | ---------- | -------------------------------------------------- |
| **Cursor**  | ⚠️ Parcial | Configuração offline, mas precisa internet para AI |
| **Claude**  | ❌ Não     | Requer internet                                    |
| **ChatGPT** | ❌ Não     | Requer internet                                    |
| **Ollama**  | ✅ Sim     | LLM local, funciona offline                        |

### 7. Posso contribuir com melhorias?

**✅ SIM!** Veja [CONTRIBUTING.md](CONTRIBUTING.md) para:

- Guia de contribuição
- Code of conduct
- Como reportar bugs
- Como propor features

### 8. Os prompts funcionam em outros idiomas além de Português?

**✅ SIM.** Os prompts são em Português, mas:

- Você pode fazer perguntas em qualquer idioma
- O coach responderá no idioma da pergunta
- Para melhor performance, use o idioma do prompt

**Tradução:** Se quiser traduzir o prompt para outro idioma, veja `CONTRIBUTING.md`.

### 9. Como funciona a validação de traduções i18n?

O script `validate-translations` espera esta estrutura:

```text
public/locales/
├── en/
│   ├── common.json
│   └── errors.json
├── pt/
│   ├── common.json
│   └── errors.json
└── es/
    ├── common.json
    └── errors.json
```

**Validação:**

- Compara chaves entre todos os idiomas
- Detecta chaves faltantes ou extras
- Valida namespaces consistentes

**Uso:**

```bash
npm run validate:translations ./public/locales
```

### 10. Tem suporte para Windows?

**✅ SIM, completo!** Veja seção [Configuração Multiplataforma](#-configuração-multiplataforma) para:

- Comandos específicos do PowerShell
- Comandos específicos do Command Prompt
- Diferenças de path separators

---

## 📖 Próximos Passos

Após instalação bem-sucedida:

### 1. 📚 Explore os Exemplos

- [examples/nextjs-auth-example.md](examples/nextjs-auth-example.md) - Implementação de autenticação em Next.js
- [examples/i18n-implementation-example.md](examples/i18n-implementation-example.md) - Sistema de internacionalização completo

### 2. 🗂️ Use os Templates

- [templates/project-kickoff-template.md](templates/project-kickoff-template.md) - Template para início de projetos
- [templates/code-review-template.md](templates/code-review-template.md) - Template para revisão de código

### 3. 🚀 Comece a Desenvolver

```text
"Preciso criar [descreva seu projeto]"
```

O coach irá guiar você através da metodologia 4W+:

1. **WHO** - Definir perfil técnico e audiência
2. **WHY** - Estabelecer problema e valor de negócio
3. **WHAT** - Mapear stack e requisitos
4. **HOW** - Planejar arquitetura e implementação

### 4. 📊 Aprenda a Metodologia

Leia a documentação completa em `system-prompt-dev-coach.md` para entender:

- Framework 4W+ em detalhe
- Processo de 4 fases
- Checklist de qualidade (120+ itens)
- Knowledge base técnico (i18n, dark mode, etc.)

---

## 📞 Suporte

### Documentação

- **README:** [README.md](README.md) - Visão geral do projeto
- **Guia de Uso:** [guia-de-uso.md](guia-de-uso.md) - Tutoriais detalhados
- **Contribuição:** [CONTRIBUTING.md](CONTRIBUTING.md) - Como contribuir
- **Changelog:** [CHANGELOG.md](CHANGELOG.md) - Histórico de mudanças

### Comunidade & Issues

- **Reportar Bugs:** <https://github.com/seu-usuario/dev-coach-prompts/issues>
- **Solicitar Features:** <https://github.com/seu-usuario/dev-coach-prompts/issues/new?template=feature_request>
- **Discussões:** <https://github.com/seu-usuario/dev-coach-prompts/discussions>

### Segurança

- **Reportar Vulnerabilidades:** security@example.com (não use issues públicas)
- **Security Policy:** [SECURITY.md](SECURITY.md) (se disponível)

---

## ✨ Você está pronto!

O Development Coach está configurado e pronto para uso.

**Comece agora:**

```text
"Preciso criar [descreva seu projeto]"
```

E deixe o coach guiar você através da metodologia 4W+! 🚀

---

**Versão:** 1.0.0
**Última Atualização:** 2025-10-19
**Licença:** MIT
