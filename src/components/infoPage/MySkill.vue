<style lang="stylus" scoped>
.skill-container
    height 500px
    background-color #f3efe0
</style>

<template lang="pug">
.skill-container
    page-title(title="我的技能" summary="学习优秀的技术，使用优秀的工具")
</template>

<script>
import PageTitle from '../PageTitle'

export default {
    name: 'MySkill',
    data: () => ({

    }),
    components: { PageTitle },
    methods: {
        
    }
}
</script>
