
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "fb63c6da-5d22-47ce-b2b6-27d5462efafc"
  },
  "ui": {
    "primary": "green",
    "gray": "cool",
    "colors": [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "primary"
    ],
    "strategy": "merge"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/home/runner/work/dm-frontend-pwa/dm-frontend-pwa/src/packages/@core/ui/app.config.ts"
import cfg1 from "/home/runner/work/dm-frontend-pwa/dm-frontend-pwa/src/node_modules/.pnpm/@nuxt+ui-pro@1.2.0_focus-trap@7.5.4_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4._7ll53jb2dyqctfwpyetmpywaci/node_modules/@nuxt/ui-pro/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)
