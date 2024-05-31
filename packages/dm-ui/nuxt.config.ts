import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
import fs, { write } from 'fs'

const getBuild = () => {

  const build = {
    templates: <{src:string, dst:string, write:boolean}[]> []
  }

  // If a file named 'eslint.config.mjs' exists in the root of the project return nothing
  // This is to avoid overwriting the existing file
  if (! fs.existsSync("./app.config.ts")) {
    build.templates.push({
        src: resolve(__dirname, "./app-export.config.ts"),
        dst: 'app.config.ts',
        write: true,
    })
  }

  if (! fs.existsSync("./tailwind.config.ts")) {
    build.templates.push({
        src: resolve(__dirname, "./tailwind-export.config.ts"),
        dst: 'tailwind.config.ts',
        write: true,
    })
  }

  return build
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      "@nuxt/ui",
      "@nuxtjs/google-fonts",
    ],
    extends: [
        '@nuxt/ui-pro'
	  ],
    build : getBuild(),
    colorMode: {
        preference: 'system',
    },
    googleFonts: {
        families: {
            Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        }
    },
});