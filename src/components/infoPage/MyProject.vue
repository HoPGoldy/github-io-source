<style lang="stylus" scoped>
+mediaDesktop()
    .project-container
        background-color #f3efe0
        .project-list
            display flex
            flex-flow row wrap
            justify-content space-between
            margin 0px 20%

            .item
                width 47%
                height 250px
                margin 28px 0px
        
        // 分割线
        .sub-title
            font-size 28px
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

+mediaMobile()
    .project-container
        background-color #f3efe0
        .project-list
            display flex
            flex-flow column wrap
            justify-content space-between
            margin 0px 10%

            .item
                margin 0px 0px 20px 0px
        
        // 分割线
        .sub-title
            font-size 24px
        hr 
            margin 20px 10%
            opacity 0.2
            border-top #727878 solid 2px 
        // 可以找到我的其他链接
        .link-area
            margin 0px 10%
            padding 32px
            display flex
            justify-content space-between
            flex-flow row wrap
</style>

<template lang="pug">
.project-container
    page-title(title="我的项目" summary="学习、实践、做自己喜欢的事情")
    .project-list
        project-item.item(v-for="item, index in projects" :key="index" :detail="item")
    
    hr

    .sub-title 你可以在以下网站找到我的发布
    .link-area
        link-item.link-item(v-for="item, index in linkList" :key="index" :detail="item")
</template>

<script>
import PageTitle from '../PageTitle'
import ProjectItem from './projectComp/ProjectItem'
import LinkItem from '../LinkItem'

export default {
    name: 'MyProject',
    data: () => ({
        projects: [
            {
                title: '学生社团管理系统',
                content: '大学毕业设计，采用前端 Vue、后端 Express + MySQL 的架构，基于 docker 部署在我的个人服务器上。',
                pic: 'https://s1.ax1x.com/2020/03/25/8jTmzq.png',
                src: 'https://student-club-management-system.netlify.com/'
            },
            {
                title: 'auto-git',
                content: '自动化项目部署工具, 支持配置 Git Webhook, 自动拉取项目并执行指定 shell 脚本来完成项目的自动化 CI。',
                pic: 'https://s1.ax1x.com/2020/03/25/8jTleU.gif',
                src: 'https://www.npmjs.com/package/@hopgoldy/auto-git'
            },
            {
                title: 'Screeps-Commander',
                content: '一个用于和游戏 Screeps 控制台进行交互的 web 应用，基于 Vue + TypeScript，并使用 WebScoket 进行服务器交互。',
                pic: 'https://s1.ax1x.com/2020/03/25/8jHgqf.png',
                src: 'https://github.com/HoPGoldy/screeps-commander'
            },
            {
                title: 'K8S 搭建与学习',
                content: '在学习和使用 K8S 时留下的文章合集，包含搭建和使用两大部分，共计两万余字。目前博客已发布文章60篇，内容总计逾7万字。',
                pic: 'https://s1.ax1x.com/2020/03/25/8jTeWn.png',
                src: 'https://www.jianshu.com/c/4ab454e9afdb'
            }
        ],
        // 我的项目的发布链接
        linkList: [
            { 
                key: 'npm', 
                label: 'www.npmjs.com',
                src: 'https://www.npmjs.com/~hopgoldy', 
                icon: require('@/images/icon/npm.svg')
            },
            { 
                key: 'DockerHub', 
                label: 'hub.docker.com',
                src: 'https://hub.docker.com/u/hopgoldy', 
                icon: require('@/images/icon/docker.svg')
            },
            { 
                key: 'github', 
                label: 'github.com',
                src: 'https://github.com/HoPGoldy?tab=repositories', 
                icon: require('@/images/icon/github.svg')
            },
        ]
    }),
    components: { PageTitle, ProjectItem, LinkItem },
    methods: {
        
    }
}
</script>