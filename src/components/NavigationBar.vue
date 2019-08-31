<style scoped lang="stylus">
.navigation
    display flex
    flex-flow column nowrap
    // 导航条的位置
    position fixed
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
</style>

<template lang="pug">
.navigation
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
        menus: {
            type: Array,
            required: true
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
        selectButtonIndex: 0
    }),
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
        }
    },
}
</script>
