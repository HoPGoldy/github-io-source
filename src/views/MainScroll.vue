<style lang="stylus" scoped>
.scroll-container
    position relative
    background-attachment:fixed
    background-size 100% auto

    .page-list
        display flex
        flex-direction column

        .show-myself
            background-color #FFFCA6

</style>

<template lang="pug">
.scroll-container(ref="container" :style="backgroundImage")
    .page-list
        first-screen(jump-to=".anchor1")
        my-detail.anchor1
        my-skill.anchor2
        my-project.anchor3
        my-interest.anchor4
    navigation-bar(:menus="menus")
</template>

<script>
import allBackgroundImages from 'images/bg'
import infoPages from '../components/infoPage'
import NavigationBar from '../components/NavigationBar'
export default {
    name: 'MainScroll',
    data: () => ({
        menus: [
            { label: '介 绍', value: '.anchor1' },
            { label: '技 能', value: '.anchor2' },
            { label: '项 目', value: '.anchor3' },
            { label: '兴 趣', value: '.anchor4' },
        ],
        allBackgroundImages
    }),
    computed: {
        backgroundImage() {
            const randIndex = Math.floor(Math.random() * this.allBackgroundImages.length)
            return {
                backgroundImage: `url(${this.allBackgroundImages[randIndex]})`
            }
        }
    },
    components: { ...infoPages, NavigationBar },
    methods: {

    },
    mounted() {

    }
}
</script>
