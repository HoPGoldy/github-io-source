<style lang="stylus" scoped>
.project-container
    
    .project-list
        display flex
        flex-flow row wrap
        justify-content space-between
        margin 0px 20%

        .item
            width 47%
            height 230px
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
</style>

<template lang="pug">
.project-container
    page-title(title="我的项目" summary="学习、实践、做自己喜欢的事情")
    .project-list
        project-item.item(v-for="item, index in projects" :key="index")
    
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
                title: 'test',
                content: 'test content',
                src: 'http://localhost:8080'
            },
            {
                title: 'test',
                content: 'test content',
                src: 'http://localhost:8080'
            },
            {
                title: 'test',
                content: 'test content',
                src: 'http://localhost:8080'
            },
            {
                title: 'test',
                content: 'test content',
                src: 'http://localhost:8080'
            }
        ],
        // 我的项目的发布链接
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
    components: { PageTitle, ProjectItem, LinkItem },
    methods: {
        
    }
}
</script>
