<style lang="stylus" scoped>
.nav-btn
    width 70px
    height 35px
    padding 20px
    font-weight bolder
    color white
    cursor pointer
    position relative
    display flex
    justify-content center

    & :first-child
        position relative
        transition transform .2s
        line-height 40px
        z-index 1

    .nav-btn-background
        z-index 0
        position absolute
        width 0px
        height 100%
        background-color #666666
        transition width .2s
        top 0px
        left 0px

    &:hover
        & :first-child
            transform scale(1.2, 1.2)
        .nav-btn-background
            width 100%
</style>

<template lang="pug">
.nav-btn(:style="selected ? selectButtonStyle : ''"
        @click="e => $emit('click', e)") 
    slot
    .nav-btn-background
</template>

<script>
export default {
    name: 'NavigationButton',
    props: {
        selected: {
            type: Boolean,
            default: false
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

    }),
    methods: {
        
    }
}
</script>
