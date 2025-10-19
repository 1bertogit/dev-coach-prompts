# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o Development Coach System Prompts! Este guia ajudará você a entender como pode colaborar.

---

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Tipos de Contribuição](#tipos-de-contribuição)
- [Padrões de Qualidade](#padrões-de-qualidade)
- [Processo de Review](#processo-de-review)
- [Convenções](#convenções)

---

## 🚀 Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/dev-coach-prompts.git
cd dev-coach-prompts

# Adicione o repositório original como upstream
git remote add upstream https://github.com/original/dev-coach-prompts.git
```

### 2. Crie uma Branch

```bash
# Crie uma branch descritiva
git checkout -b feature/add-vue-example
# ou
git checkout -b fix/typo-in-readme
# ou
git checkout -b docs/improve-i18n-guide
```

### 3. Faça suas Mudanças

- Siga as [convenções](#convenções) do projeto
- Teste suas mudanças localmente
- Adicione exemplos quando aplicável

### 4. Commit

```bash
# Adicione seus arquivos
git add .

# Faça commit com mensagem descritiva
git commit -m "feat: adiciona exemplo de autenticação com Firebase"
```

**Padrão de Commits:**
- `feat:` nova funcionalidade ou exemplo
- `fix:` correção de bug ou erro
- `docs:` mudanças na documentação
- `refactor:` refatoração de código/texto
- `chore:` tarefas de manutenção

### 5. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/add-vue-example

# Crie um Pull Request no GitHub
# Preencha o template com detalhes da sua contribuição
```

---

## 🎯 Tipos de Contribuição

### 📚 Exemplos Práticos

**O que adicionar:**
- Exemplos de implementação usando o Development Coach
- Cenários reais de uso dos prompts
- Interações completas (requisição → resposta do coach)

**Estrutura esperada:**
```markdown
# 🎯 Título do Exemplo

> Descrição do cenário

## 📝 Interação com o Coach

### 1️⃣ Requisição Inicial
[requisição do desenvolvedor]

### 2️⃣ Resposta do Coach (Discovery)
[perguntas estratégicas]

### 3️⃣ Respostas do Desenvolvedor
[contexto fornecido]

### 4️⃣ Implementação do Coach
[código e explicações]

## 🎓 Aprendizados
[pontos-chave do exemplo]
```

**Localização:** `examples/nome-do-exemplo.md`

---

### 🗂️ Templates

**O que adicionar:**
- Templates para diferentes tipos de projetos
- Checklists reutilizáveis
- Formulários de planejamento

**Requisitos:**
- Deve ser genérico o suficiente para múltiplos contextos
- Incluir instruções de preenchimento
- Seguir formatação consistente

**Localização:** `templates/nome-do-template.md`

---

### 🔧 Scripts e Ferramentas

**O que adicionar:**
- Scripts de validação
- Ferramentas de automação
- Utilities para desenvolvimento

**Requisitos:**
- Código comentado e documentado
- Incluir instruções de uso no header
- Adicionar ao `package.json` se for npm script
- Cross-platform (Node.js quando possível)

**Localização:** `scripts/nome-do-script.js`

---

### 📖 Documentação

**O que melhorar:**
- Clareza de explicações
- Correção de erros de português/inglês
- Adição de diagramas ou ilustrações
- Expansão de seções existentes

**Prioridades:**
- Exemplos práticos > teoria abstrata
- Clareza > verbosidade
- Uso real > casos hipotéticos

---

### 🌍 Traduções

**Idiomas bem-vindos:**
- Inglês (en)
- Espanhol (es)
- Francês (fr)
- Outros idiomas

**O que traduzir:**
1. README.md → README.en.md
2. guia-de-uso.md → usage-guide.en.md
3. Exemplos principais
4. Templates principais

**Importante:**
- Mantenha formatação original
- Adapte exemplos culturalmente quando necessário
- Teste links traduzidos

---

### 🐛 Correções de Bugs/Erros

**Tipos de erros:**
- Typos e erros gramaticais
- Links quebrados
- Código com bugs
- Formatação inconsistente

**Como reportar:**
1. Abra uma Issue descrevendo o erro
2. Inclua localização exata (arquivo:linha)
3. Sugira correção se possível

---

## ✅ Padrões de Qualidade

### Para Exemplos

- [ ] Cenário real e comum
- [ ] Interação completa (discovery → implementação)
- [ ] Código funcional e testável
- [ ] Explicações claras do "porquê"
- [ ] Checklist de validação incluído
- [ ] Próximos passos sugeridos
- [ ] Recursos adicionais linkados

### Para Templates

- [ ] Genérico e reutilizável
- [ ] Instruções de preenchimento claras
- [ ] Formatação consistente com outros templates
- [ ] Checkboxes para marcação
- [ ] Espaço para notas personalizadas

### Para Scripts

- [ ] Código comentado (JSDoc se JS)
- [ ] Instruções de uso no header
- [ ] Error handling robusto
- [ ] Output claro e colorido (se CLI)
- [ ] Cross-platform (quando possível)
- [ ] Testado em ambiente limpo

### Para Documentação

- [ ] Português claro e gramaticalmente correto
- [ ] Estrutura lógica com headings
- [ ] Exemplos práticos incluídos
- [ ] Links funcionais
- [ ] Formatação Markdown correta

---

## 🔍 Processo de Review

### O que é avaliado:

1. **Relevância**: A contribuição é útil para o público-alvo?
2. **Qualidade**: Segue os padrões de qualidade acima?
3. **Consistência**: Está alinhada com o estilo do projeto?
4. **Completude**: Está completa ou precisa de mais informações?

### Timeline esperado:

- **Issues**: Resposta inicial em até 48h
- **Pull Requests**: Review inicial em até 5 dias úteis
- **Feedback**: Implementação de mudanças solicitadas

### Critérios de aceitação:

✅ **Aceito imediatamente:**
- Correções de typos/erros pequenos
- Melhorias de clareza na documentação
- Adição de recursos adicionais relevantes

⚠️ **Requer discussão:**
- Mudanças estruturais nos prompts
- Adição de novas seções principais
- Mudanças que afetam múltiplos arquivos

❌ **Provavelmente rejeitado:**
- Contribuições incompletas sem contexto
- Mudanças que quebram estrutura existente
- Conteúdo duplicado ou muito específico

---

## 📏 Convenções

### Formatação Markdown

```markdown
# Heading 1 (Título principal)
## Heading 2 (Seções principais)
### Heading 3 (Subseções)

**Negrito** para ênfase
*Itálico* para termos técnicos
`código inline` para comandos/código

[Links](https://url.com) sempre descritivos
```

### Emojis Padrão

Use emojis de forma consistente:

- 🎯 Objetivos, metas
- 📋 Checklists, listas
- 🔍 Análise, investigação
- 💻 Código, implementação
- ⚠️ Avisos, considerações
- ✅ Validação, sucesso
- 🚀 Próximos passos, deploy
- 📚 Recursos, referências
- 🎓 Aprendizados, educação
- 🔧 Ferramentas, scripts

### Estrutura de Arquivos

```
examples/
  ├── categoria-exemplo.md
  └── outro-exemplo.md

templates/
  ├── tipo-template.md
  └── outro-template.md

scripts/
  ├── script-util.js
  └── outro-script.sh

docs/
  └── documentacao-adicional.md
```

### Nomenclatura

- **Arquivos**: `kebab-case-lowercase.md`
- **Diretórios**: `lowercase` (sem espaços)
- **Branches**: `tipo/descricao-curta`

---

## 💡 Ideias para Contribuir

### Exemplos Ainda Não Cobertos

- [ ] Autenticação com Firebase
- [ ] Autenticação com Auth0/Clerk
- [ ] Dark mode com diferentes frameworks (Vue, Angular)
- [ ] Internacionalização com Vue i18n
- [ ] Setup de testes (Jest, Vitest, Playwright)
- [ ] CI/CD com GitHub Actions
- [ ] Monorepo com Turborepo/Nx
- [ ] GraphQL com Apollo Client
- [ ] State management (Zustand, Jotai, Redux Toolkit)
- [ ] Forms com React Hook Form + Zod

### Templates Úteis

- [ ] Bug report template
- [ ] Feature request template
- [ ] Refactoring checklist
- [ ] Performance audit template
- [ ] Security audit template
- [ ] Accessibility audit template

### Scripts

- [ ] Validador de checklist de qualidade
- [ ] Gerador de estrutura de projeto
- [ ] Analyzer de complexidade de prompts
- [ ] Conversor de exemplos entre frameworks

### Documentação

- [ ] Guia de integração com GitHub Copilot
- [ ] Guia de integração com Windsurf
- [ ] Comparação entre diferentes AI coding assistants
- [ ] Best practices de prompt engineering
- [ ] FAQ (Frequently Asked Questions)

---

## 🙏 Agradecimentos

Toda contribuição, por menor que seja, é valiosa! Você será creditado:

- Na seção de Contributors do README
- No arquivo específico que contribuiu (se aplicável)
- No CHANGELOG (para contribuições maiores)

---

## 📞 Dúvidas?

Se tiver dúvidas sobre como contribuir:

1. Leia este guia completamente
2. Consulte issues existentes
3. Abra uma issue com sua dúvida
4. Entre em contato com os mantenedores

---

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT).

---

**Obrigado por tornar o Development Coach ainda melhor! 🚀**
