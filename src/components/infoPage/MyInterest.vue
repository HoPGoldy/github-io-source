<style lang="stylus" scoped>
.skill-container
    height 500px
    background-color #f3efe0
</style>

<template lang="pug">
.skill-container
    page-title(title="我的爱好" summary="让热爱的事情，成为自己进步的阶梯")
</template>

<script>
import PageTitle from '../PageTitle'

export default {
    name: 'MyInterest',
    data: () => ({

    }),
    components: { PageTitle },
    methods: {
        
    }
}
</script>
