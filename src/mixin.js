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
    },
    methods: {
        /**
         * 递归获取导航条到页面流顶端的距离
         * 
         * @param {object} el 要获取高度的 html 元素
         * @returns {number} 元素到页面顶端的距离
         * @see https://blog.csdn.net/u013764814/article/details/83825479
         */
        getElementToPageTop(el) {
            if(el.parentElement) {
                return this.getElementToPageTop(el.parentElement) + el.offsetTop
            }
            return el.offsetTop
        }
    }
}