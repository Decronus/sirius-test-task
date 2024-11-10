import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss';

export default defineConfig({
    rules: [
        // Простой кастомный класс
        ['main-text-dark', { color: '#182233' }],
        ['text-primary-blue', { color: '#116ACC' }],
        ['border-primary-light', { 'border-color': '#F8FAFF' }],
        ['bg-primary-light', { 'background-color': '#F8FAFF' }],
        ['block-shadow', { 'box-shadow': '0px 4px 30px rgba(0, 0, 0, 0.12)' }],
    ],
    presets: [
        presetUno(),
        presetIcons({
            warn: true,
            collections: {
                mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default),
            },
            customizations: {
                customize(props) {
                    props.width = '24px';
                    props.height = '24px';
                    return props;
                },
            },
        }),
        presetAttributify(),
    ],
});
