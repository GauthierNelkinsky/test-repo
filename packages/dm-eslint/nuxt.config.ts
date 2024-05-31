import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import fs from 'fs'

const getBuild = () => {
  // If a file named 'eslint.config.mjs' exists in the root of the project return nothing
  // This is to avoid overwriting the existing file
  if (fs.existsSync("./eslint.config.mjs")) {
    return {}
  }
  return({templates: [
    {
      src: resolve(__dirname, "./eslint.config.mjs"),
      dst: 'eslint.config.mjs',
      write: true,
    }
  ]})
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint'
  ],
  build : getBuild(),
  eslint: {
    //This is shared
    config: {
      autoInit: false,
      stylistic: {
        semi: true,
        indent: "tab",
        quotes: 'single',
      }
    }
  },
})
