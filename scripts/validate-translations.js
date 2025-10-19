#!/usr/bin/env node

/**
 * Script de Validação de Traduções i18n
 *
 * Verifica se todas as chaves de tradução existem em todos os idiomas
 * e alerta sobre chaves faltantes ou extras.
 *
 * Uso:
 *   node validate-translations.js <caminho-para-locales>
 *
 * Exemplo:
 *   node validate-translations.js ./public/locales
 */

const fs = require('fs');
const path = require('path');

// Cores para output no terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getAllKeys(obj, prefix = '') {
  let keys = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

function loadTranslations(localesPath) {
  const translations = {};

  // Lê todos os diretórios de idiomas
  const languages = fs.readdirSync(localesPath).filter(file => {
    return fs.statSync(path.join(localesPath, file)).isDirectory();
  });

  for (const lang of languages) {
    const langPath = path.join(localesPath, lang);
    translations[lang] = {};

    // Lê todos os arquivos JSON no diretório do idioma
    const files = fs.readdirSync(langPath).filter(file => file.endsWith('.json'));

    for (const file of files) {
      const namespace = path.basename(file, '.json');
      const filePath = path.join(langPath, file);

      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(content);
        translations[lang][namespace] = parsed;
      } catch (error) {
        log('red', `❌ Erro ao ler ${filePath}: ${error.message}`);
      }
    }
  }

  return translations;
}

function validateTranslations(translations) {
  const languages = Object.keys(translations);

  if (languages.length === 0) {
    log('red', '❌ Nenhum idioma encontrado!');
    return false;
  }

  log('blue', `\n📚 Idiomas encontrados: ${languages.join(', ')}\n`);

  // Usa o primeiro idioma como referência
  const referenceLang = languages[0];
  const namespaces = Object.keys(translations[referenceLang]);

  let hasErrors = false;

  for (const namespace of namespaces) {
    log('cyan', `\n🔍 Validando namespace: ${namespace}`);

    // Coleta todas as chaves de todos os idiomas para este namespace
    const allKeys = {};

    for (const lang of languages) {
      if (!translations[lang][namespace]) {
        log('yellow', `  ⚠️  ${lang}: namespace "${namespace}" não existe`);
        hasErrors = true;
        continue;
      }

      const keys = getAllKeys(translations[lang][namespace]);
      allKeys[lang] = new Set(keys);
    }

    // Compara chaves entre idiomas
    for (let i = 0; i < languages.length; i++) {
      for (let j = i + 1; j < languages.length; j++) {
        const lang1 = languages[i];
        const lang2 = languages[j];

        if (!allKeys[lang1] || !allKeys[lang2]) continue;

        // Chaves em lang1 mas não em lang2
        const missingInLang2 = [...allKeys[lang1]].filter(key => !allKeys[lang2].has(key));

        if (missingInLang2.length > 0) {
          log('yellow', `  ⚠️  Chaves em ${lang1} mas não em ${lang2}:`);
          missingInLang2.forEach(key => {
            log('yellow', `      - ${key}`);
          });
          hasErrors = true;
        }

        // Chaves em lang2 mas não em lang1
        const missingInLang1 = [...allKeys[lang2]].filter(key => !allKeys[lang1].has(key));

        if (missingInLang1.length > 0) {
          log('yellow', `  ⚠️  Chaves em ${lang2} mas não em ${lang1}:`);
          missingInLang1.forEach(key => {
            log('yellow', `      - ${key}`);
          });
          hasErrors = true;
        }
      }
    }

    if (!hasErrors) {
      log('green', `  ✅ Todas as chaves estão sincronizadas`);
    }
  }

  return !hasErrors;
}

function generateReport(translations) {
  log('blue', '\n📊 RELATÓRIO DE TRADUÇÕES\n');

  const languages = Object.keys(translations);

  for (const lang of languages) {
    const namespaces = Object.keys(translations[lang]);
    let totalKeys = 0;

    for (const namespace of namespaces) {
      const keys = getAllKeys(translations[lang][namespace]);
      totalKeys += keys.length;
    }

    log('cyan', `${lang}:`);
    log('cyan', `  - Namespaces: ${namespaces.length}`);
    log('cyan', `  - Total de chaves: ${totalKeys}`);
  }
}

// Main
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    log('red', 'Uso: node validate-translations.js <caminho-para-locales>');
    log('yellow', 'Exemplo: node validate-translations.js ./public/locales');
    process.exit(1);
  }

  const localesPath = args[0];

  if (!fs.existsSync(localesPath)) {
    log('red', `❌ Caminho não encontrado: ${localesPath}`);
    process.exit(1);
  }

  log('blue', '🚀 Iniciando validação de traduções...\n');

  const translations = loadTranslations(localesPath);
  const isValid = validateTranslations(translations);

  generateReport(translations);

  if (isValid) {
    log('green', '\n✅ Todas as traduções estão válidas!\n');
    process.exit(0);
  } else {
    log('red', '\n❌ Foram encontrados problemas nas traduções.\n');
    process.exit(1);
  }
}

main();
