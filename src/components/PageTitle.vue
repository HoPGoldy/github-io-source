<style scoped lang="stylus">
+mediaDesktop()
    .page-title
        margin-top 60px
        width 100%
        display flex
        flex-flow column nowrap
        
        // 标题样式
        .my-name
            padding 20px 0px
            font-size 54px
        // 标题下面那句话
        .my-summary
            font-size 21px
        // 分割线
        hr 
            margin 30px 20%
            opacity 0.2
+mediaMobile()
    .page-title
        margin-top 30px
        width 100%
        display flex
        flex-flow column nowrap
        
        // 标题样式
        .my-name
            padding 10px 0px
            font-size 40px
        // 标题下面那句话
        .my-summary
            font-size 18px
        // 分割线
        hr 
            margin 30px 10%
            opacity 0.2
        
</style>

<template lang="pug">
.page-title
    .my-name(:style="fontStyle") {{title}}
    .my-summary(:style="fontStyle") {{summary}}
    hr(:style="borderStyle")
</template>

<script>
/**
 * 段落标题
 * 该组件接受一个标题和摘要，并展示出来
 * 
 * @param {string} title 显示的段落标题
 * @param {string} summary 显示的摘要
 * @param {string} color 标题和摘要的颜色
 * @param {string} borderColor 分隔线的颜色
 */
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String
        },
        color: {
            type: String,
            default: ''
        },
        borderColor: {
            type: String,
            default: '#727878'
        }
    },
    data: () => ({ }),
    computed: {
        fontStyle() {
            return {
                color: this.color
            }
        },
        borderStyle() {
            return {
                borderTop: `${this.borderColor} solid 2px`
            }
        }
    },
    methods: { }
}
</script>
