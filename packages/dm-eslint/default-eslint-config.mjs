import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            semi: [2, "always"]
        }
    }
);