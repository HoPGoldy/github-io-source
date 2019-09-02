<style lang="stylus" scoped>
.skill-container
    padding-bottom 40px
    background-color #f3efe0

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
    // 可以找到我的其他链接
    .link-area
        margin 0px 10%
        padding 32px
        display flex
        justify-content space-around
        flex-flow row wrap
        .link-item
            margin 0px 32px
</style>

<template lang="pug">
.skill-container
    page-title(title="我的能力" summary="学习优秀的技术，使用优秀的工具")

    .skill-title 前端技能
    .skill-list
        line-item.skill-item(v-for="item, index in fontendSkills" :key="index" :title="item.title" :star="item.star")
    hr

    .skill-title 服务器 & 其他
    .skill-list
        line-item.skill-item(v-for="item, index in backendSkills" :key="index" :title="item.title" :star="item.star")
    hr

    .skill-title 我的工具
    .skill-list
        line-item.skill-item(v-for="item, index in workSkills" :key="index" :title="item.title" :star="item.star")
    hr

    .skill-title 你可以在以下网站找到我的发布
    .link-area
        link-item.link-item(v-for="item, index in linkList" :key="index" :detail="item")
</template>

<script>
import LineItem from './skillComp/LineItem'
import PageTitle from '../PageTitle'
import LinkItem from '../LinkItem'

export default {
    name: 'MySkill',
    data: () => ({
        // 前端技能
        fontendSkills: [
            { title: 'node.js', star: 5 },
            { title: 'Vue', star: 5 },
            { title: 'Element UI', star: 5 },
            { title: 'Yarn', star: 5 },
            { title: 'Stylus', star: 5 },
            { title: 'pug', star: 5 },
            { title: 'CSS3', star: 4 },
            { title: 'HTML5', star: 4 },
            { title: 'echarts', star: 4 },
            { title: '微信小程序', star: 4 },
            { title: 'leflet', star: 3 },
        ],
        // 其他技能
        backendSkills: [
            { title: 'Python3', star: 5 },
            { title: 'Express', star: 4 },
            { title: 'Docker', star: 4 },
            { title: 'Swagger', star: 3 },
            { title: '腾讯 SCF', star: 3 },
            { title: 'Docker Compose', star: 3 },
            { title: 'Kubernetes', star: 3 },
            { title: 'Helm', star: 2 },
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
        ],
        linkList: [
            { 
                key: 'npm', 
                label: 'www.npmjs.com',
                src: 'https://www.npmjs.com/~hopgoldy', 
                icon: require('@/images/npm.svg')
            },
            { 
                key: 'DockerHub', 
                label: 'hub.docker.com',
                src: 'https://hub.docker.com/u/hopgoldy', 
                icon: require('@/images/docker.svg')
            },
            { 
                key: 'github', 
                label: 'github.com',
                src: 'https://github.com/HoPGoldy?tab=repositories', 
                icon: require('@/images/github.svg')
            },
        ]
    }),
    components: { LineItem, PageTitle, LinkItem },
    methods: {
        
    }
}
</script>
