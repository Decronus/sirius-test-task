// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetUno, presetIcons } from 'unocss';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@unocss/nuxt', '@nuxt/eslint'],
    components: {
        dirs: ['~/components/charts', '~/components'],
    },
});
