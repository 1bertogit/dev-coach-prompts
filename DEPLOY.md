# 🚀 Guia de Deploy no Netlify

> Passos para fazer deploy do projeto no Netlify

## 📋 Pré-requisitos

- [ ] Conta no GitHub
- [ ] Conta no Netlify (https://www.netlify.com)
- [ ] Repositório Git configurado

---

## 🎯 Opção 1: Deploy via Netlify UI (Mais Fácil)

### Passo 1: Criar Repositório no GitHub

```bash
# Criar novo repositório no GitHub
gh repo create dev-coach-prompts --public --source=. --remote=origin --push

# Ou via interface web:
# 1. Acesse https://github.com/new
# 2. Nome: dev-coach-prompts
# 3. Descrição: Sistema de prompts estruturados para coaching de desenvolvimento
# 4. Public
# 5. Não inicialize com README (já temos)
# 6. Create repository
```

### Passo 2: Push para GitHub

```bash
# Se criou via interface web
git remote add origin https://github.com/SEU-USUARIO/dev-coach-prompts.git
git branch -M main
git push -u origin main
```

### Passo 3: Conectar ao Netlify

1. **Acesse Netlify:** https://app.netlify.com
2. **Clique:** "Add new site" → "Import an existing project"
3. **Conecte GitHub:** Autorize Netlify a acessar seus repos
4. **Selecione Repositório:** dev-coach-prompts
5. **Configurações de Build:**
   - **Branch to deploy:** main
   - **Build command:** (deixe vazio)
   - **Publish directory:** .
6. **Deploy site**

**✅ Pronto!** Seu site estará no ar em ~30 segundos.

---

## 🎯 Opção 2: Deploy via Netlify CLI (Mais Controle)

### Passo 1: Instalar Netlify CLI

```bash
npm install -g netlify-cli
```

### Passo 2: Login no Netlify

```bash
netlify login
```

Abrirá browser para autenticação.

### Passo 3: Inicializar Site

```bash
# Na raiz do projeto
netlify init

# Responda as perguntas:
# 1. Create & configure a new site
# 2. Team: (selecione seu team)
# 3. Site name: dev-coach-prompts (ou custom)
# 4. Build command: (deixe vazio - pressione Enter)
# 5. Directory to deploy: . (ponto)
```

### Passo 4: Deploy Manual

```bash
# Deploy de teste
netlify deploy

# Deploy em produção
netlify deploy --prod
```

**URL de produção:** https://dev-coach-prompts.netlify.app (ou seu custom domain)

---

## 🔧 Configurar Secrets para CI/CD

Para que o GitHub Actions faça deploy automático, configure:

### 1. Obter Netlify Tokens

```bash
# Gerar token pessoal
# Acesse: https://app.netlify.com/user/applications/personal
# Clique: "New access token"
# Nome: GitHub Actions
# Copie o token
```

**Obter Site ID:**

```bash
netlify status

# Ou via UI:
# Site Settings → General → Site details → Site ID
```

### 2. Adicionar Secrets no GitHub

**Via GitHub CLI:**

```bash
# Adicionar NETLIFY_AUTH_TOKEN
gh secret set NETLIFY_AUTH_TOKEN

# Cole o token quando solicitado

# Adicionar NETLIFY_SITE_ID
gh secret set NETLIFY_SITE_ID

# Cole o site ID quando solicitado
```

**Via Interface Web:**

1. Acesse: https://github.com/SEU-USUARIO/dev-coach-prompts/settings/secrets/actions
2. **New repository secret**
3. Name: `NETLIFY_AUTH_TOKEN` | Secret: (cole o token)
4. **Add secret**
5. Repita para `NETLIFY_SITE_ID`

---

## ✅ Verificar Deploy

### Passo 1: Criar Pull Request

```bash
# Criar branch de teste
git checkout -b test/deploy

# Fazer mudança
echo "# Test" >> test.md
git add test.md
git commit -m "test: verify CI/CD"

# Push
git push -u origin test/deploy

# Criar PR
gh pr create --title "Test: Verify CI/CD" --body "Testing automated deployment"
```

### Passo 2: Verificar Actions

1. Acesse: https://github.com/SEU-USUARIO/dev-coach-prompts/actions
2. Veja workflow "Quality Checks" rodando
3. Aguarde conclusão (~2 minutos)
4. ✅ Todos os checks devem passar

### Passo 3: Verificar Deploy Preview

1. No PR, veja comentário do Netlify bot
2. Clique no link de preview
3. Verifique que o site carregou corretamente

---

## 🎨 Custom Domain (Opcional)

### Passo 1: Adicionar Domínio

**Via Netlify UI:**

1. Site Settings → Domain management
2. Add custom domain
3. Digite: `seudominio.com`
4. Verify

### Passo 2: Configurar DNS

**Se usar Netlify DNS (recomendado):**

Netlify fornecerá nameservers para configurar no seu registrador.

**Se usar DNS externo:**

Adicione CNAME record:
```
www.seudominio.com CNAME seu-site.netlify.app
```

E A record para apex:
```
seudominio.com A 75.2.60.5
```

### Passo 3: Ativar HTTPS

Netlify ativa HTTPS automaticamente via Let's Encrypt (~5 minutos).

---

## 📊 Monitoramento

### Analytics (Netlify Analytics)

```bash
# Via CLI
netlify open:admin

# Navegue para: Analytics
```

### Deploy Logs

```bash
# Ver últimos deploys
netlify watch

# Ver logs específicos
netlify deploy:list
```

### Build Notifications

Configure em: Site Settings → Build & deploy → Deploy notifications

Opções:
- Email on deploy
- Slack notifications
- Webhook custom

---

## 🐛 Troubleshooting

### Deploy falha com erro 404

**Causa:** `publish` directory incorreto

**Solução:**

```toml
# netlify.toml
[build]
  publish = "."
```

### CI/CD não roda

**Causa:** Secrets não configurados

**Solução:**

```bash
# Verificar secrets
gh secret list

# Adicionar se faltando
gh secret set NETLIFY_AUTH_TOKEN
gh secret set NETLIFY_SITE_ID
```

### Site não atualiza

**Causa:** Cache

**Solução:**

```bash
# Limpar cache e redeploy
netlify deploy --prod --clear-cache
```

### Build muito lento

**Causa:** Dependências desnecessárias

**Solução:**

Este projeto é só docs, build é instantâneo.

---

## 📝 URLs Importantes

### Produção

- **Site:** https://dev-coach-prompts.netlify.app
- **Admin:** https://app.netlify.com/sites/dev-coach-prompts

### Desenvolvimento

- **GitHub Repo:** https://github.com/SEU-USUARIO/dev-coach-prompts
- **GitHub Actions:** https://github.com/SEU-USUARIO/dev-coach-prompts/actions

---

## 🎉 Deploy Completo!

Seu projeto está agora:

- ✅ **Versionado no Git**
- ✅ **Hospedado no GitHub**
- ✅ **Deploy automático no Netlify**
- ✅ **CI/CD com GitHub Actions**
- ✅ **Deploy previews em PRs**
- ✅ **HTTPS automático**

**Próximos passos:**

1. Compartilhe a URL do site
2. Configure custom domain (opcional)
3. Monitore analytics
4. Continue desenvolvendo! 🚀

---

**Última Atualização:** 2025-10-19
**Versão:** 1.0.0
