<style scoped lang="stylus">
+mediaDesktop()
    .footer-container
        box-shadow 0 17px 40px -5px #2d2d2d inset
        background-color #434242
        padding-bottom 16px

        .special-thx
            color #e8e8e8
            margin-bottom 60px
            & *
                margin-top 12px
            .love
                font-size 34px
                color #ff9898
        .describe
            color #a2a2a2
            display inline-block
            margin 3px 0px
        & a
            color #a2a2a2

+mediaMobile()
    .footer-container
        box-shadow 0 17px 40px -5px #2d2d2d inset
        background-color #434242
        padding 0px 10% 16px 10%

        .special-thx
            color #e8e8e8
            margin-bottom 40px
            font-size 16px
            & *
                margin-top 12px
            .love
                font-size 30px
                color #ff9898
        .describe
            color #a2a2a2
            display inline-block
            font-size 15px
            margin 3px 0px
        & a
            color #a2a2a2
</style>

<template lang="pug">
.footer-container
    page-title(title="致谢" color="#e8e8e8")
    .special-thx
        div 感谢我所使用软件的开源作者们, 因为你们, 我才能站在更高的地方继续攀登。
        div 感谢和我一起工作过生活过的朋友同事们, 你们的指导对我的成长至关重要。
        div 最后，感谢我的女友
        div.love Leefoundy
        div 遇见你，是最美丽的意外
    .describe 本网站基于 Vue 制作, 创意灵感来源于 <a href="http://www.pascalvangemert.nl/#/profile">Pascal van Gemert 的个人网站</a>。
    br
    .describe 网站已开源至 <a href="https://github.com/HoPGoldy/github-io-source">github</a>, 欢迎 star。
</template>

<script>
import PageTitle from '../PageTitle'

export default {
    name: 'Footer',
    data: () => ({
        
    }),
    components: { PageTitle },
    methods: {

    },
}
</script>
