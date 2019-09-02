<style scoped lang="stylus">
.item-container
    display flex
    flex-flow row nowrap
    justify-content space-between
    padding 8px 12px
    transition all .2s

    .skill-name
        text-align left
    .skill-star
        display flex
        flex-flow row nowrap
        *
            transition all .2s
    
    &:hover
        background-color white
        border-radius 7px
        .skill-star *
            padding 0px 2px
</style>

<template lang="pug">
.item-container
    .skill-name {{title}}
    .skill-star
        img(v-for="number in star" :key="number" src="@/images/star.svg")
        img(v-for="number in (5 - star)" :key="star + number" src="@/images/unstar.svg")
</template>

<script>
export default {
    name: 'LineItem',
    props: {
        title: {
            type: String,
            required: true
        },
        star: {
            type: Number,
            default: 5
        }
    },
    data: () => ({
        
    }),
    methods: {

    },
}
</script>
