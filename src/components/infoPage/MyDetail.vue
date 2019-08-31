<style lang="stylus" scoped>
.detail-container
    background-color white
    display flex
    flex-flow column nowrap

    .title
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
        
    .detail
        width 70%
        padding 30px 15% 0px 15%
        // flex 配置
        display flex
        flex-flow row nowrap
        justify-content center

        // 左边长段介绍
        .my-introduce
            width 26%
            padding-right 40px
            text-align left
            h3
                font-size 28px
        // 中间头像
        .my-avatar
            width 200px
            height 200px
            border-radius 50%
            border #e8e8e8 solid 13px
        // 右侧个人信息
        .my-info
            width 26%
            padding-left 40px
            text-align left
            h3
                font-size 28px
    
    .link-title
        padding 32px
    // 可以找到我的其他链接
    .link
        padding 32px
        display flex
        flex-flow row wrap

        
</style>

<template lang="pug">
.detail-container
    page-title(title="个人信息" summary="前端开发、运维工程师")
    .detail
        .my-introduce 
            h3 自我介绍
            p 我是一名前端开发者，喜欢工程化的前端项目，注释不足恐惧症。热衷于使用掌握的技术把脑子里的新鲜点子实现出来。
        .my-avatar
            .avatar-bordar
        .my-info
            h3 个人信息
            strong 姓名：
            span 黄普光
            br
            strong 年龄：
            span 22岁
            br
            strong 地址：
            span 山东菏泽
            br
    page-title(title="如何找到我?" summary="更多信息、更多分享、更多回忆")
    .link
        .link-itme 知乎

</template>

<script>
import PageTitle from '../PageTitle'

export default {
    name: 'MyDetail',
    data: () => ({
        linkList: [
            { key: '简书', src: 'https://www.jianshu.com/u/3ee5572a4346', icon: '123'}
        ]
    }),
    components: { PageTitle },
    methods: {
        
    }
}
</script>
