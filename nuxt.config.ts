export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@unocss/nuxt', '@nuxt/eslint', '@element-plus/nuxt', '@pinia/nuxt'],
    components: {
        dirs: ['~/components/charts', '~/components/dashboards', '~/components'],
    },
});
