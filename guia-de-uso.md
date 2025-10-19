# 📖 GUIA DE USO: System Prompts para Development Coaching

## 📦 Arquivos Disponíveis

| Arquivo | Tamanho | Uso Recomendado |
|---------|---------|-----------------|
| `system-prompt-dev-coach.md` | ~8.5KB | **Completo** - Projetos grandes, contexto ilimitado |
| `system-prompt-resumido.md` | ~2KB | **Condensado** - Contextos com limite de tokens |
| `resumo-adicoes.md` | ~3KB | **Documentação** - Referência das adições feitas |

---

## 🛠️ Como Usar em Diferentes Ferramentas

### 1️⃣ **Cursor IDE**

#### Setup Inicial
```bash
# 1. Abra seu projeto no Cursor
# 2. Abra o arquivo .cursorrules na raiz do projeto (ou crie)
# 3. Cole o conteúdo de system-prompt-dev-coach.md

# .cursorrules
[Cole o conteúdo completo do prompt aqui]
```

#### Uso no Chat
```
Você: "Preciso implementar autenticação com Supabase no meu app Next.js"

Cursor (seguindo o prompt):
🎯 OBJETIVO: Implementar sistema de auth seguro com Supabase
📦 CONTEXTO: Vou coletar informações primeiro...

1. Qual método de auth você prefere? (Email/Password, OAuth, Magic Link)
2. Precisa de roles/permissões?
3. Já tem Supabase configurado?
...
```

#### Dicas Cursor-Específicas
- Use `@codebase` para referências ao código existente
- Use `@file` para mencionar arquivos específicos
- O prompt guiará o Cursor a fazer perguntas antes de implementar

---

### 2️⃣ **Claude Projects (claude.ai)**

#### Setup do Project
```
1. Crie um novo Project em claude.ai
2. Vá em "Project Knowledge"
3. Faça upload dos 3 arquivos:
   - system-prompt-dev-coach.md (prompt principal)
   - system-prompt-resumido.md (referência rápida)
   - resumo-adicoes.md (documentação)

4. Em "Custom Instructions", adicione:
   "Siga as diretrizes do system-prompt-dev-coach.md 
    para todas as interações de desenvolvimento."
```

#### Exemplo de Uso
```
Você: "Quero criar um dashboard com gráficos em tempo real"

Claude:
🎯 Vamos estruturar isso usando a metodologia 4W+

🔍 DISCOVERY - Perguntas Estratégicas:
1. Qual é a fonte dos dados em tempo real?
2. Quantos usuários simultâneos você espera?
3. Que tipos de gráficos você precisa?
...
```

---

### 3️⃣ **ChatGPT (OpenAI)**

#### Via Custom GPT
```
1. Vá em "Explore GPTs" > "Create a GPT"
2. Nome: "Development Coach"
3. Description: "Expert development mentor using 4W methodology"
4. Instructions: [Cole system-prompt-dev-coach.md]
5. Conversation starters:
   - "Ajude-me a estruturar um novo projeto"
   - "Revise a arquitetura do meu código"
   - "Implemente i18n no meu app"
   - "Adicione dark mode acessível"
```

#### Via System Message (ChatGPT Plus)
```python
# Usando API
import openai

messages = [
    {
        "role": "system",
        "content": open("system-prompt-dev-coach.md").read()
    },
    {
        "role": "user", 
        "content": "Preciso otimizar performance do meu app React"
    }
]

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages
)
```

---

### 4️⃣ **Windsurf Editor**

#### Configuração
```
1. Abra Windsurf Settings
2. Vá em "AI Assistant" > "Custom Instructions"
3. Cole o conteúdo de system-prompt-dev-coach.md
4. Habilite "Apply to all chats"
```

#### Workflow Recomendado
```
1. Inicie conversa com objetivo claro
2. O coach fará perguntas estratégicas
3. Aprove a arquitetura proposta
4. Revise código gerado seção por seção
5. Use checklist para validação final
```

---

### 5️⃣ **GitHub Copilot Chat**

#### Setup (VS Code)
```json
// settings.json
{
  "github.copilot.chat.systemPrompt": "Leia as instruções em .github/copilot-instructions.md"
}
```

```bash
# .github/copilot-instructions.md
[Cole system-prompt-resumido.md aqui para economizar tokens]
```

#### Comandos Úteis
```
/explain - "Explique esta arquitetura seguindo metodologia 4W"
/fix - "Corrija este código aplicando o checklist de qualidade"
/tests - "Gere testes baseados nos padrões do coach"
```

---

### 6️⃣ **Cline (Claude + VS Code)**

#### Instalação e Setup
```bash
# 1. Instale extensão Cline no VS Code
# 2. Configure API key do Anthropic
# 3. Crie arquivo na raiz do projeto:

# .clinerules
[Cole system-prompt-dev-coach.md]
```

#### Uso Avançado
```
Você: "Refatore este componente para melhor performance"

Cline (seguindo prompt):
🔍 Vou analisar o componente atual...
[Análise automática do código]

🎯 Identificados 3 problemas:
1. Re-renders desnecessários (sem useMemo)
2. Props drilling (3 níveis)
3. Estado não otimizado

💻 Proposta de refatoração:
[Código com explicações inline]

✅ Melhorias esperadas:
- 60% menos re-renders
- Bundle -15KB
- Manutenibilidade +40%
```

---

## 🎯 Workflows Recomendados

### 🆕 Para Novo Projeto

```
1. Você: "Quero criar um [tipo de app] com [stack]"

2. Coach executa DISCOVERY:
   - Faz 5-7 perguntas estratégicas
   - Mapeia requisitos e constraints

3. Coach propõe ARCHITECTURE:
   - Estrutura de pastas
   - Design decisions
   - Tech stack justificado

4. Você aprova/ajusta

5. Coach implementa INCREMENTALMENTE:
   - Setup inicial (configs, deps)
   - Core features (um de cada vez)
   - Polimento (i18n, dark mode, etc)

6. Coach aplica VALIDATION:
   - Usa checklist de qualidade
   - Sugere melhorias
   - Documenta decisões
```

---

### 🐛 Para Debugging

```
1. Você: "Tenho este erro: [erro]"

2. Coach usa DEBUG SISTEMÁTICO:
   - Reproduz entendimento do problema
   - Lista hipóteses com probabilidades
   - Propõe testes diagnósticos

3. Você roda testes

4. Coach identifica causa raiz

5. Coach implementa solução:
   - Fix com explicação
   - Previne recorrência
   - Atualiza testes
```

---

### 🎨 Para Nova Feature

```
1. Você: "Preciso adicionar [feature]"

2. Coach analisa INTEGRAÇÃO:
   - Como se encaixa no código atual
   - Impacto em outras áreas
   - Alternativas de implementação

3. Coach propõe DESIGN:
   - Padrões a seguir
   - Libraries necessárias
   - Trade-offs

4. Você escolhe abordagem

5. Coach implementa em PASSOS:
   - Backend/API (se necessário)
   - Frontend/UI
   - Testes
   - Documentação
```

---

### 🔍 Para Code Review

```
1. Você: "Revise este PR: [link ou código]"

2. Coach usa CHECKLIST:
   - Qualidade técnica
   - Acessibilidade
   - Performance
   - Segurança
   - Manutenibilidade

3. Coach fornece FEEDBACK:
   ✅ O que está bom (específico)
   ⚠️ Pontos de atenção (com sugestões)
   🚨 Crítico (deve corrigir antes de merge)

4. Coach sugere MELHORIAS:
   - Refatorações específicas
   - Otimizações possíveis
   - Documentação faltante
```

---

## 💡 Dicas de Uso Efetivo

### ✅ FAÇA

1. **Seja Específico**
   ```
   ❌ "Ajude com autenticação"
   ✅ "Implemente auth JWT com refresh tokens no Express + MongoDB"
   ```

2. **Forneça Contexto**
   ```
   ✅ "Tenho um app Next.js 14 com App Router.
       Uso Tailwind e Shadcn/ui.
       Preciso adicionar internacionalização."
   ```

3. **Valide Incrementalmente**
   ```
   ✅ Após cada etapa, confirme: "Ok, vamos para o próximo"
   ✅ Isso mantém alinhamento e qualidade
   ```

4. **Use o Checklist**
   ```
   ✅ "Antes do deploy, aplique o checklist de qualidade completo"
   ✅ Coach revisará item por item
   ```

### ❌ EVITE

1. **Perguntas Vagas**
   ```
   ❌ "Como fazer um site?"
   ❌ "Meu código não funciona" (sem código/erro)
   ```

2. **Pular Etapas**
   ```
   ❌ "Não precisa perguntar nada, só implemente"
   ⚠️ Isso gera código genérico e subótimo
   ```

3. **Ignorar Validações**
   ```
   ❌ Avançar sem revisar código proposto
   ⚠️ Pode introduzir bugs ou má arquitetura
   ```

---

## 🎓 Recursos Adicionais

### Quando Usar Versão Completa vs Resumida

| Cenário | Versão |
|---------|--------|
| Projeto novo grande | Completa |
| Arquitetura complexa | Completa |
| Code review detalhado | Completa |
| Quick fix / snippet | Resumida |
| Contexto com limite de tokens | Resumida |
| Dúvida rápida | Resumida |

### Personalizações Recomendadas

#### Para Times Específicos
```markdown
## 🏢 CONTEXTO DA EMPRESA
- Stack padrão: [Next.js 14, Tailwind, Supabase]
- Padrões de código: [ESLint config específico]
- Review process: [2 aprovações necessárias]
- Deploy: [Vercel, staging obrigatório]
```

#### Para Projetos Legados
```markdown
## 🏛️ CÓDIGO LEGADO
- Stack atual: [React 16, Class Components]
- Restrições: [Não pode refatorar tudo de uma vez]
- Estratégia: [Migração incremental para hooks]
```

---

## 🚀 Começando Agora

### Quick Start (5 minutos)

1. **Escolha sua ferramenta:** Cursor, Claude, ChatGPT, etc
2. **Cole o prompt:** Use versão completa se possível
3. **Teste com exemplo:**
   ```
   "Quero criar um componente de formulário 
    com validação em tempo real usando React Hook Form"
   ```
4. **Observe o workflow:** O coach seguirá metodologia 4W
5. **Ajuste conforme necessário:** Personalize o prompt para seu contexto

---

## 📞 Suporte

**Problemas Comuns:**

- **Coach não segue metodologia:** Verifique se o prompt está completo
- **Respostas genéricas:** Forneça mais contexto específico
- **Pula etapas:** Reforce: "Siga o processo 4W passo a passo"

---

✅ **Agora você está pronto para usar o Development Coach!**

Comece com um projeto pequeno para se familiarizar, depois aplique em projetos maiores. 🚀
