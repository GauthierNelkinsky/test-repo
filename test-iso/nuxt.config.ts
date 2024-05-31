// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	extends: [
    'dm-ui',
    'dm-seo',
    'dm-i18n',
    'dm-eslint',
	],

  i18n: {
      langDir: './lang',
      locales: [ //Globals translations
        { code: 'de', iso: 'de-DE', file: 'de-DE.ts' },
        { code: 'en', iso: 'en-US', file: 'en-US.ts' },
        { code: 'fr', iso: 'fr-FR', file: 'fr-FR.ts' }
      ],
      defaultLocale: "fr"   
  }
      
});
