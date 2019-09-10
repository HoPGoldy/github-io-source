<style lang="stylus" scoped>
.first-container
    text-align center
    +mediaDesktop()
        font-size 65px
        font-weight bolder
    +mediaMobile()
        font-size 50px
    color white
    position relative

    .bg
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        background-color black
        opacity 0.2
    .info-box
        position relative
        cursor default
        top 38%

    .continue-tip
        position absolute
        opacity 0.7
        width 100%
        bottom 10%

        .icon
            cursor pointer
</style>

<template lang="pug">
.first-container(:style="{ height: windowHeight }" @click="jumpToElement")
    .bg
    .info-box HoPGoldy
    .continue-tip
        svg.icon(t='1567040838902', viewBox='0 0 1024 1024', version='1.1', xmlns='http://www.w3.org/2000/svg', p-id='10128', width='64', height='64')
            path(d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z', p-id='10129', fill='#ffffff')

</template>

<script>
export default {
    name: 'FirstScreen',
    props: {
        // 点击该页面跳转到的元素的 css 选择器
        jumpTo: {
            type: String,
            required: true
        }
    },
    data: () => ({

    }),
    methods: {
        jumpToElement() {
            document.querySelector(this.jumpTo).scrollIntoView({ behavior: 'smooth' })
        }
    },
    mounted() {

    }
}
</script>