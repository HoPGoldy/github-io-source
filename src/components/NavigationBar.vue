<style scoped lang="stylus">
.nav-area
    // 导航条的位置, 此处的 absolute 会被本组件中的滚动监听替换成 fixed
    position absolute
    top 0px
    right 56px
    bottom 0px

    .navigation
        display flex
        flex-flow column nowrap
        // 导航条背景颜色
        background-color black
        margin-top 56px

        .nav-btn
            width 70px
            height 35px
            padding 20px
            font-weight bolder
            color white
            cursor pointer
            position relative
            transition color .2s

            span
                position relative
                line-height 40px
                z-index 1

            .nav-btn-background
                z-index 0
                position absolute
                width 0px
                height 100%
                background-color #666666
                transition width .2s
                top 0px
                left 0px

            &:hover
                color white

                .nav-btn-background
                    width 100%
    .back-top
        margin-top 35px
        height 35px
        width 70px
        padding 20px
        cursor pointer
        background-color black

.fixed
    position fixed
</style>

<template lang="pug">
.nav-area(ref="navBar" :class="fixed? 'fixed' : ''")
    .navigation
        navigation-button(v-for="item, index in menus" 
                          :selected="index == selectButtonIndex"
                          @click="jumpTo(item.value)")
            div {{item.label}}
    navigation-button.back-top(@click="backTop")
        img(src="@/images/upArrow.svg")
        //- <svg t="1567338736004" class="icon" viewBox="0 0 1812 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1078" width="32" height="32"><path d="M889.848778 273.683698 194.723176 968.8093C150.261273 1013.271282 78.068836 1013.264037 33.537475 968.732676-11.304397 923.890804-11.028221 852.035969 33.460773 807.546975L807.673526 33.334221C852.13543-11.127682 924.327866-11.120516 968.859227 33.410924 970.936651 35.488347 972.917291 37.623731 974.801147 39.811798 981.564586 44.15155 987.967823 49.277935 993.880605 55.190796L1768.093358 829.403471C1812.582352 873.892543 1812.858528 945.747379 1768.016656 990.589172 1723.485295 1035.120612 1651.292858 1035.127778 1606.830955 990.665875L889.848778 273.683698Z" p-id="1079" fill="#ffffff"></path></svg>
</template>

<script>
/**
 * 导航条
 * 该组件接受一个数组，并将该数组展示成一个导航条
 * 
 * @param menus 导航信息
 *  @property {string} label 导航按钮中显示的内容
 *  @property {string} value 导航到的 html 元素的 css 选择器
 */
import NavigationButton from './NavigationButton'

export default {
    name: 'NavigationBar',
    props: {
        // 显示的菜单数据
        menus: {
            type: Array,
            required: true
        },
        // 选中的菜单索引
        select: {
            type: Number,
            default: 0
        }
    },
    computed: {
        // 选中的导航按钮样式
        selectButtonStyle() {
            return {
                backgroundColor: '#666666',
                color: 'white'
            }
        }
    },
    data: () => ({
        // 当前高亮的按钮索引
        selectButtonIndex: 0,
        // 导航条是否固定
        fixed: false,
        // 导航条在页面中的高度
        navBarOffsetTop: 0
    }),
    components: { NavigationButton },
    watch: {
        select(val) {
            if (val >= 0 && val < this.menus.length) {
                this.selectButtonIndex = val
            }
        }
    },
    methods: {
        /**
         * 导航按钮点击事件
         * 选中当前按钮并导航到对应元素
         * 
         * @param {number} buttonIndex 选中按钮的索引
         * @param {string} selector 要导航到的元素的 css 选择器
         */
        onNavigateButtonClick(buttonIndex, selector) {
            this.selectButtonIndex = buttonIndex
            this.jumpTo(selector)
        },
        /**
         * 导航到指定元素
         * 
         * @param {string} selectore 要导航到的元素的 css 选择器
         */
        jumpTo(selector) {
            document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
        },
        /**
         * 监听导航条在页面流中的位置
         * 一旦到达顶端则固定
         */
        onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop, this.navBarOffsetTop)
            this.fixed = scrollTop >= this.navBarOffsetTop
        },
        backTop() {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        }
    },
    mounted() {
        this.navBarOffsetTop = this.getElementToPageTop(this.$refs.navBar)
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>
