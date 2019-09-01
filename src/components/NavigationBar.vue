<style scoped lang="stylus">
.navigation
    display flex
    flex-flow column nowrap
    // 导航条的位置, 此处的 absolute 会被本组件中的滚动监听替换成 fixed
    position absolute
    top 56px
    left 56px
    // 导航条背景颜色
    background-color black

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
            line-height 40px

        .nav-btn-background
            z-index -1
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

.fixed
    position fixed
</style>

<template lang="pug">
.navigation(ref="navBar" :class="fixed? 'fixed' : ''")
    .nav-btn(v-for="item, index in menus" 
             :style="index === selectButtonIndex ? selectButtonStyle : ''"
             @click="onNavigateButtonClick(index, item.value)") 
        span {{item.label}}
        .nav-btn-background
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
            // 这里减去的 56 是导航条 css 中 top 属性偏移的像素值
            this.fixed = scrollTop >= (this.navBarOffsetTop - 56)
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
