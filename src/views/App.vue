<style lang="stylus">
html, body, #app 
    height 100%
    width 100%
    margin 0px
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    font-size 18px
    color #2c3e50

// 隐藏滚动条
html
    overflow -moz-hidden-unscrollable
body
    -ms-overflow-style none
	overflow auto
body::-webkit-scrollbar 
    display none
</style>

<template lang="pug">
router-view#app
</template>

<script>
export default {
    name: 'app'
}
</script>
