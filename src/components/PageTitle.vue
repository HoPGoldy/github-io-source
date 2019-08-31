<style scoped lang="stylus">
.page-title
    margin-top 60px
    width 100%
    display flex
    flex-flow column nowrap
    
    // 名字样式
    .my-name
        padding 20px 0px
        font-size 54px
    // 名字下面那句话
    .my-summary
        font-size 21px
    // 分割线
    hr 
        margin 30px 20%
        opacity 0.2
        border-top #727878 solid 2px 
        
</style>

<template lang="pug">
.page-title
    .my-name {{title}}
    .my-summary {{summary}}
    hr
</template>

<script>
/**
 * 段落标题
 * 该组件接受一个标题和摘要，并展示出来
 * 
 * @param {string} title 显示的段落标题
 * @param {string} summary 显示的摘要
 */
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        }
    },
    data: () => ({ }),
    methods: { }
}
</script>
