<style lang="stylus" scoped>
.skill-container
    padding-bottom 40px

    .skill-title
        font-size 28px
    .skill-list
        display flex
        flex-flow row wrap
        justify-content space-between
        align-content flex-start
        // 控制技能列表集中的程度
        margin 16px 20%
        .skill-item
            width 40%
    // 分割线
    hr 
        margin 40px 20%
        opacity 0.2
        border-top #727878 solid 2px
</style>

<template lang="pug">
.skill-container
    page-title(title="我的能力" summary="学习优秀的技术，使用优秀的工具")

    .skill-title 前端技能
    .skill-list
        line-item.skill-item(v-for="item, index in fontendSkills" :key="index" :title="item.title" :star="item.star")
    hr

    .skill-title 其他 & 服务器
    .skill-list
        line-item.skill-item(v-for="item, index in backendSkills" :key="index" :title="item.title" :star="item.star")
    hr

    .skill-title 我的工具
    .skill-list
        line-item.skill-item(v-for="item, index in workSkills" :key="index" :title="item.title" :star="item.star")
</template>

<script>
import LineItem from './skillComp/LineItem'
import PageTitle from '../PageTitle'

export default {
    name: 'MySkill',
    data: () => ({
        // 前端技能
        fontendSkills: [
            { title: 'Node.js', star: 5 },
            { title: 'Vue', star: 5 },
            { title: 'Element UI', star: 5 },
            { title: 'Yarn', star: 5 },
            { title: 'Stylus', star: 5 },
            { title: 'pug', star: 5 },
            { title: 'JSON', star: 5 },
            { title: 'XML', star: 5 },
            { title: 'CSS3', star: 4 },
            { title: 'HTML5', star: 4 },
            { title: 'echarts', star: 4 },
            { title: '微信小程序', star: 4 },
            { title: 'JQuery', star: 3 },
            { title: 'leflet', star: 3 },
            { title: 'animejs', star: 2 },
        ],
        // 其他技能
        backendSkills: [
            { title: 'Python3', star: 5 },
            { title: 'Express', star: 4 },
            { title: 'Docker', star: 4 },
            { title: 'Yaml', star: 4 },
            { title: 'Swagger', star: 3 },
            { title: '腾讯 SCF', star: 3 },
            { title: 'Docker Compose', star: 3 },
            { title: 'Kubernetes', star: 3 },
            { title: 'MySQL', star: 2 },
            { title: 'Helm', star: 1 },
        ],
        // 软件使用技能
        workSkills: [
            { title: 'VSCode', star: 5 },
            { title: 'Chrome / Dev tools', star: 5 },
            { title: 'Windows', star: 5 },
            { title: 'Mac', star: 5 },
            { title: 'Ubuntu', star: 4 },
            { title: 'Git / Git flow', star: 4 },
            { title: 'NotePad++', star: 4 },
            { title: 'Pycharm', star: 3 },
        ]
    }),
    components: { LineItem, PageTitle },
    methods: {
        
    }
}
</script>
