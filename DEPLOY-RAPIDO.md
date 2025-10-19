# 🚀 Deploy Rápido no Netlify (5 minutos)

> Guia simplificado para fazer deploy AGORA

## ✅ Status Atual

- ✅ **Git inicializado**
- ✅ **Código no GitHub:** https://github.com/1bertogit/dev-coach-prompts
- ⏳ **Falta:** Conectar ao Netlify

---

## 📋 Passos para Deploy (Via Interface Web)

### Passo 1: Acesse Netlify

1. Abra: **https://app.netlify.com**
2. Faça login (se não estiver logado)

### Passo 2: Adicione Novo Site

1. Clique em: **"Add new site"** (botão verde)
2. Selecione: **"Import an existing project"**

### Passo 3: Conecte GitHub

1. Clique em: **"GitHub"** (botão do GitHub)
2. Se aparecer "Authorize Netlify":
   - Clique **"Authorize Netlify"**
   - Confirme sua senha se solicitado

### Passo 4: Selecione o Repositório

1. Busque por: **"dev-coach-prompts"**
2. Ou navegue: **1bertogit** → **dev-coach-prompts**
3. Clique no repositório

### Passo 5: Configurações de Deploy

**Configure exatamente assim:**

| Campo | Valor |
|-------|-------|
| **Branch to deploy** | `main` |
| **Build command** | (deixe vazio) |
| **Publish directory** | `.` (um ponto) |
| **Deploy log visibility** | Public (ou Private) |

### Passo 6: Deploy Site

1. Clique em: **"Deploy dev-coach-prompts"** (botão grande)
2. Aguarde ~30 segundos
3. ✅ **Deploy completo!**

---

## 🎉 Seu Site Está no Ar!

**URL gerada automaticamente:**
- https://dev-coach-prompts.netlify.app
- OU
- https://[random-name].netlify.app

**Para ver:**
1. Clique no nome do site no dashboard
2. Copie a URL em "Site overview"

---

## 🔧 Configurar CI/CD Automático (Opcional mas Recomendado)

Para que os PRs e pushes futuros façam deploy automático:

### Passo 1: Obter Tokens

1. **Netlify Auth Token:**
   - Acesse: https://app.netlify.com/user/applications/personal
   - Clique: **"New access token"**
   - Name: `GitHub Actions`
   - Copie o token (salve em algum lugar seguro)

2. **Netlify Site ID:**
   - No dashboard do seu site
   - Vá em: **Site settings** → **General** → **Site details**
   - Copie o **Site ID**

### Passo 2: Adicionar Secrets no GitHub

#### Via GitHub Web

1. Acesse: https://github.com/1bertogit/dev-coach-prompts/settings/secrets/actions
2. Clique: **"New repository secret"**
3. Adicione dois secrets:

**Secret 1:**
- Name: `NETLIFY_AUTH_TOKEN`
- Secret: (cole o token do Netlify)
- Clique **"Add secret"**

**Secret 2:**
- Name: `NETLIFY_SITE_ID`
- Secret: (cole o Site ID)
- Clique **"Add secret"**

#### Via GitHub CLI (Alternativa)

```bash
# Token de autenticação
gh secret set NETLIFY_AUTH_TOKEN
# Cole o token quando solicitado

# Site ID
gh secret set NETLIFY_SITE_ID
# Cole o Site ID quando solicitado
```

### Passo 3: Verificar CI/CD

1. Crie um PR de teste:
   ```bash
   git checkout -b test/ci-cd
   echo "# Test CI/CD" >> test.md
   git add test.md
   git commit -m "test: verify CI/CD workflow"
   git push -u origin test/ci-cd
   gh pr create --title "Test CI/CD" --body "Testing automated deployment"
   ```

2. Vá em: https://github.com/1bertogit/dev-coach-prompts/actions
3. Veja o workflow **"Quality Checks"** rodando
4. Aguarde conclusão (~2 min)
5. ✅ CI/CD funcionando!

---

## 🎨 Custom Domain (Opcional)

Se quiser usar domínio próprio:

1. No Netlify: **Site settings** → **Domain management**
2. Clique: **"Add custom domain"**
3. Digite seu domínio: `seudominio.com`
4. Siga instruções para configurar DNS

---

## 🐛 Troubleshooting

### Deploy falha

**Sintoma:** Build falhou ou site não carrega

**Solução:**
1. Verifique que **Publish directory** é `.` (ponto)
2. Verifique que **Build command** está vazio
3. Clique em **"Retry deploy"**

### Site mostra 404

**Sintoma:** URL abre mas mostra página 404

**Solução:**
1. Verifique arquivo `netlify.toml` na raiz
2. Deve ter redirect configurado
3. Clique em **"Clear cache and deploy site"**

### CI/CD não roda

**Sintoma:** Actions no GitHub não executam

**Solução:**
1. Verifique secrets: https://github.com/1bertogit/dev-coach-prompts/settings/secrets/actions
2. Devem existir: `NETLIFY_AUTH_TOKEN` e `NETLIFY_SITE_ID`
3. Recrie secrets se necessário

---

## ✅ Checklist Final

- [ ] Site deployado no Netlify
- [ ] URL funcionando
- [ ] Secrets configurados no GitHub (opcional)
- [ ] CI/CD testado (opcional)
- [ ] Custom domain configurado (opcional)

---

## 🎉 Pronto!

Seu projeto está LIVE em:
- **GitHub:** https://github.com/1bertogit/dev-coach-prompts
- **Netlify:** https://dev-coach-prompts.netlify.app (ou sua URL)

**Compartilhe com o mundo!** 🚀

---

**Criado:** 2025-10-19
**Tempo estimado:** 5 minutos
