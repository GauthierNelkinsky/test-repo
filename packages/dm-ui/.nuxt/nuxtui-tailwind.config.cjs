
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor, generateSafelist } = require("/home/runner/work/dm-frontend-pwa/dm-frontend-pwa/src/node_modules/.pnpm/@nuxt+ui@2.16.0_focus-trap@7.5.4_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@_qiooiq77ltwezm7tttrqr7acni/node_modules/@nuxt/ui/dist/runtime/utils/colors")
      const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss'),
          iconsPlugin({ collections: getIconCollections(["heroicons"]) })
        ],
        content: {
          files: [
            "/home/runner/work/dm-frontend-pwa/dm-frontend-pwa/src/node_modules/.pnpm/@nuxt+ui@2.16.0_focus-trap@7.5.4_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@_qiooiq77ltwezm7tttrqr7acni/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/home/runner/work/dm-frontend-pwa/dm-frontend-pwa/src/node_modules/.pnpm/@nuxt+ui@2.16.0_focus-trap@7.5.4_nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@_qiooiq77ltwezm7tttrqr7acni/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]),
      }
    