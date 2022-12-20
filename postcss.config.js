module.exports = {
    plugins: {
        autoprefixer: true,
        'postcss-advanced-variables': true,
        'postcss-color-function': true,
        'postcss-preset-env': {
            stage: false,
            features: {
                'nesting-rules': true,
                'image-set-function': true,
            },
        },
        cssnano: {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        },
        'cq-prolyfill/postcss-plugin': true,
    },
}