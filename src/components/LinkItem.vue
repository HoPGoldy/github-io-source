<style lang="stylus" scoped>
.link-container
    cursor pointer
    display flex
    padding 6px 12px
    color #999999
    transition all .2s
    .src
        padding-left 16px
        line-height 32px
    
    &:hover
        background-color #e8e8e8
        border-radius 7px
</style>

<template lang="pug">
.link-container(@click="jumpTo")
    img.icon(:src="detail.icon")
    .src {{detail.label || detail.src}}
</template>

<script>
/**
 * 链接
 * 图标 + 链接内容 + 点击跳转
 */
export default {
    name: 'LinkItem',
    props: {
        /**
         * 链接内容
         * 
         * @param {string} icon 图标的路径，将使用 require() 获取
         * @param {string} src 链接地址
         * @param {string} label 显示的内容
         */
        detail: {
            type: Object,
            required: true
        }
    },
    data: () => ({ }),
    methods: {
        // 跳转到 src 网站
        jumpTo() {
            window.open(this.detail.src)
        }
    }
}
</script>
