<style lang="stylus" scoped>
.scroll-container
    position relative
    background-attachment:fixed
    background-size cover

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
        my-experiences.anchor2
        my-skill.anchor3
        my-project.anchor4
        my-footer
</template>

<script>
import allBackgroundImages from 'images/bg'
import infoPages from '../components/infoPage'
export default {
    name: 'MainScroll',
    data: () => ({
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
    components: { ...infoPages },
    methods: {
        
    },
    mounted() {

    }
}
</script>
