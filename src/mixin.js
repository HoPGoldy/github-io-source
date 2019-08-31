import config from './config.js'

export const global = {
    data: () => ({
        config
    }),
}

export const windowInfo = {
    computed: {
        windowHeight() {
            return `${document.documentElement.clientHeight}px`
        }
    }
}