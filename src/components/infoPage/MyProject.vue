<style lang="stylus" scoped>
.skill-container
    height 500px
</style>

<template lang="pug">
.skill-container
    page-title(title="我的项目" summary="学习、实践、做自己喜欢的事情")
</template>

<script>
import PageTitle from '../PageTitle'

export default {
    name: 'MyProject',
    data: () => ({

    }),
    components: { PageTitle },
    methods: {
        
    }
}
</script>
