<style lang="stylus" scoped>
.experience-container
    background-color #f3efe0
    padding-bottom 40px
    
    .experience-list
        padding 0px 20%
</style>

<template lang="pug">
.experience-container
    page-title(title="我的履历" summary="让热爱的事情，成为自己进步的阶梯")
    .experience-list
        experience-item.item(v-for="item, index in experienceList" :key="index" :detail="item")
</template>

<script>
import PageTitle from '../PageTitle'
import ExperienceItem from './experiencesComp/ExperienceItem'

export default {
    name: 'MyExperiences',
    data: () => ({
        // 履历数据
        experienceList: [
            {
                title: '聚光科技',
                date: '2019.07 至今',
                office: '前端开发工程师',
                content: '聚光科技是一家致力于环保的上市公司，我主要负责菏泽项目中的前端开发与维护工作。在此期间承担了接入整个菏泽市环保监控视频微服务的开发工作。',
                position: '中国, 山东, 菏泽'
            },
            {
                title: '聚光科技',
                date: '2018.11 - 2019.07',
                office: '实习',
                content: '在加入聚光之后我开始系统的学习前端工程化，对于 webpack 和 babel 开始有了具体的认识与应用。掌握了 vue + elementUI 的前端开发，于此同时逐渐学习了 echarts、leaflet、animejs 等模块的使用。',
                position: '中国, 山东, 菏泽'
            },
            {
                title: '菏泽学院',
                date: '2018.9 - 2018.11',
                office: '大四',
                content: '开始学习 python 及微信小程序。对于 node 的理解进一步加深，在此期间开源了几个基于 requests 模块的 python 爬虫，并且上线了一款方便自己兼职工作的微信小程序《达辅助》。',
                position: '中国, 山东, 菏泽'
            },
            {
                title: '菏泽学院',
                date: '2017.9 - 2018.9',
                office: '大三',
                content: '开始学习 git 的使用，并使用 github 管理自己的项目。随后在 Github Page 上发布了自己的 hexo 静态博客。(该博客现已下线，内容迁移至简书)。在 博客的发布期间系统的学习了 nodejs 及 H5 / CSS3。',
                position: '中国, 山东, 菏泽'
            },
            {
                title: '菏泽学院',
                date: '2015.9 - 2017.9',
                office: '大一、大二',
                content: '学习了 C++, C#, Java 等主流语言，了解了 OOP 开发模式，开始学习使用 Ubuntu 和 centOS。',
                position: '中国, 山东, 菏泽'
            }
        ]
    }),
    components: { PageTitle, ExperienceItem },
    methods: {
        
    }
}
</script>
