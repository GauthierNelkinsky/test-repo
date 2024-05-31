
// @ts-nocheck
import locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_de_DE_ts from "../lang/de-DE.ts";
import locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_en_US_ts from "../lang/en-US.ts";
import locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_fr_FR_ts from "../lang/fr-FR.ts";


export const localeCodes =  [
  "de",
  "en",
  "fr"
]

export const localeLoaders = {
  "de": [{ key: "../lang/de-DE.ts", load: () => Promise.resolve(locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_de_DE_ts), cache: true }],
  "en": [{ key: "../lang/en-US.ts", load: () => Promise.resolve(locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_en_US_ts), cache: true }],
  "fr": [{ key: "../lang/fr-FR.ts", load: () => Promise.resolve(locale__home_runner_work_dm_frontend_pwa_dm_frontend_pwa_src_packages__64core_i18n_lang_fr_FR_ts), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "__i18n_config_ts_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./i18n.config.ts",
  "locales": [
    {
      "code": "de",
      "iso": "de-DE",
      "files": [
        "lang/de-DE.ts"
      ]
    },
    {
      "code": "en",
      "iso": "en-US",
      "files": [
        "lang/en-US.ts"
      ]
    },
    {
      "code": "fr",
      "iso": "fr-FR",
      "files": [
        "lang/fr-FR.ts"
      ]
    }
  ],
  "defaultLocale": "de",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "./lang",
  "detectBrowserLanguage": false,
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "de",
    "iso": "de-DE",
    "files": [
      {
        "path": "lang/de-DE.ts"
      }
    ]
  },
  {
    "code": "en",
    "iso": "en-US",
    "files": [
      {
        "path": "lang/en-US.ts"
      }
    ]
  },
  {
    "code": "fr",
    "iso": "fr-FR",
    "files": [
      {
        "path": "lang/fr-FR.ts"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
