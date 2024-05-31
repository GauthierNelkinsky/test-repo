import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../../../../node_modules/.pnpm/nuxt@3.11.2_@opentelemetry+api@1.8.0_@parcel+watcher@2.4.1_@types+node@20.12.12_@unocss+reset_t3angv7efbx6s5u3hywef2xt2m/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}