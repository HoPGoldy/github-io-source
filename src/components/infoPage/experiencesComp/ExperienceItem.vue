<style scoped lang="stylus">
+mediaDesktop()
    .experience-item-container
        display flex
        flex-flow row nowrap
        text-align left
        padding 25px
        transition all .2s
        cursor default

        &:hover
            background-color rgba(0, 0, 0, 0.1)
            border-radius 5px
            .line
                opacity 1

        .left
            width 25%
            // 标题
            .title
                font-size 32px
                font-weight bolder
            // 日期
            .date
                font-size 23px
            & div
                margin 8px 0px
        .line
            transition opacity .2s
            width 2px
            opacity 0
            background-color #a9a9a9
            margin 0px 5% 0px 5%
        .right
            width 65%
            // 职位
            .office
                font-size 28px
            .position
                position relative
                top -4px 
                left 4px   
                color #999
            & div
                margin 12px 0px
+mediaMobile()
    .experience-item-container
        display flex
        flex-flow column nowrap
        text-align left
        padding 15px
        transition all .2s
        cursor default

        &:hover
            background-color rgba(0, 0, 0, 0.1)
            border-radius 5px
            .line
                opacity 1

        .left
            text-align center
            // 标题
            .title
                font-size 28px
                font-weight bolder
            // 日期
            .date
                font-size 20px
            & div
                margin 8px 0px
        .line
            transition opacity .2s
            height 2px
            opacity 0
            background-color #a9a9a9
        .right
            // 职位
            .office
                font-size 25px
            .position
                position relative
                top -4px 
                left 4px   
                color #999
            & div
                margin 12px 0px
</style>

<template lang="pug">
.experience-item-container
    .left
        .title {{detail.title}}
        .date {{detail.date}}
    .line
    .right
        .office {{detail.office}}
        .content {{detail.content}}
        img(src='@/images/icon/position.svg')
        span.position {{detail.position}}
</template>

<script>
export default {
    name: 'ExperienceItem',
    props: {
        /**
         * 组件展示的信息
         * 
         * @property {string} title 左侧显示的就职公司
         * @property {string} date 就职日期
         * @property {string} office 就职岗位
         * @property {string} content 介绍内容
         * @property {string} position 公司位置
         */
        detail: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        
    }),
    methods: {

    },
}
</script>
