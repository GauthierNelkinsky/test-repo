import { resolve } from "path";
import fs from 'fs';

const getBuild = () => {
  // If a file named 'eslint.config.mjs' exists in the root of the project return nothing
  // This is to avoid overwriting the existing file
  if (fs.existsSync("./lang")) {
    return {}
  }
  return(
    {
      templates: [
        {
          src: resolve(__dirname, "./lang-export/en-US.ts"),
          dst: './lang/en-US.ts',
          write: true,
        },
        {
          src: resolve(__dirname, "./lang-export/de-DE.ts"),
          dst: './lang/de-DE.ts',
          write: true,
        },
        {
          src: resolve(__dirname, "./lang-export/fr-FR.ts"),
          dst: './lang/fr-FR.ts',
          write: true,
        },
      ]
    }
  )
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  build : getBuild(),
  hooks: {
		ready (nuxt) {
			// Get the nuxt.config.ts file
      const nuxtConfig = fs.readFileSync(nuxt.options.srcDir + '/nuxt.config.ts', 'utf-8');
      const i18nConfig = `
  i18n: {
      langDir: './lang',
      locales: [ //Globals translations
        { code: 'de', iso: 'de-DE', file: 'de-DE.ts' },
        { code: 'en', iso: 'en-US', file: 'en-US.ts' },
        { code: 'fr', iso: 'fr-FR', file: 'fr-FR.ts' }
      ],   
  }
      `;

      // if the i18n config is already in the nuxt.config.ts file, do nothing
      const regexPattern = /(?<!dm-)i18n/;

      if (regexPattern.test(nuxtConfig)) {
        return;
      }

      // Find the last '}' in the file
      const lastBracketIndex = nuxtConfig.lastIndexOf('}');

      // Write just before the last '}' in the file
      const newNuxtConfig = nuxtConfig.slice(0, lastBracketIndex) + i18nConfig + "\n" + nuxtConfig.slice(lastBracketIndex);

      fs.writeFileSync(nuxt.options.srcDir + '/nuxt.config.ts', newNuxtConfig, 'utf-8');
		},
	},
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    langDir: './lang',
    locales: [ //Globals translations
      { code: 'de', iso: 'de-DE', file: 'de-DE.ts' },
      { code: 'en', iso: 'en-US', file: 'en-US.ts' },
      { code: 'fr', iso: 'fr-FR', file: 'fr-FR.ts' }
    ],
    //Globals settings
    detectBrowserLanguage: false,
    defaultLocale: "de",
  }
})