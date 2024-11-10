// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        files: ['**/*.ts', '**/*.js', '**/*.vue'], // поддержка TS, JS и Vue файлов
        rules: {
            'no-console': 'off', //
            'no-unused-vars': 'warn', // предупреждение о неиспользуемых переменных
            'eqeqeq': 'error', // обязательное использование строгого сравнения
            'no-var': 'error', // запрет использования var, использование let/const
            'func-style': ['error', 'declaration'], // использование функций в виде деклараций
            'prefer-const': 'warn', // предупреждение, если переменная не изменяется, но не объявлена как const
            'vue/multi-word-component-names': 'off', // отключение требования для многословных имен компонентов в Vue
            'vue/require-default-prop': 'off', // отключение требования дефолтных пропсов в Vue
            '@typescript-eslint/no-explicit-any': 'off', // отключение требования к any в TS
            'vue/v-on-event-hyphenation': 'off', // отключение требования использования camelCase для событий в Vue
            'vue/no-v-html': 'off',
            'vue/html-self-closing': [
                'off',
                {
                    html: {
                        void: 'always',
                        normal: 'never',
                        component: 'always',
                    },
                },
            ],
        },
    },
)
