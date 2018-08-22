
module.exports = {
    /* this is a static site, no Node.js */
    mode: 'spa',

    /* Global headers parts */
    head: {
        title: "{{title}}",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '{{escape description }}' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /* global SASS file */
    css: ["@/assets/layout.sass"],

    /* Progress bar color */
    loading: { color: '#4f4fce' },

    /* Build configuration */
    build: {
        /* Run ESLint on save */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

