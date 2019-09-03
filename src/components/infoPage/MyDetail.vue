<style lang="stylus" scoped>
.detail-container
    // 注意下面的 position 设置
    // 这是为了本组件下的导航条可以正常定位
    position relative

    background-color white
    display flex
    flex-flow column nowrap

    // 小标题样式
    .sub-title
        font-size 28px
    // 分割线
    hr 
        margin 30px 20%
        opacity 0.2
        border-top #727878 solid 2px 
        
    .detail
        width 70%
        padding 30px 15% 30px 15%
        // flex 配置
        display flex
        flex-flow row nowrap
        justify-content center

        // 左边长段介绍
        .my-introduce
            width 26%
            padding 0px 40px
            text-align left
            h3
                font-size 28px
        // 中间头像
        .my-avatar
            width 200px
            height 200px
            border-radius 50%
            border #e8e8e8 solid 13px
            overflow hidden
            img 
                max-width 100%
                
        // 右侧个人信息
        .my-info
            width 26%
            padding-left 40px
            text-align left
            .content
                padding-left 30%
            h3
                text-align center
                font-size 28px
    
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
.detail-container
    page-title(title="个人信息" summary="前端开发、运维工程师")
    .detail
        .my-introduce 
            h3 自我介绍
            p 我是一名前端开发者，喜欢工程化的前端项目，注释不足恐惧症。喜欢分享，热衷于使用掌握的技术把脑子里的新鲜点子实现出来。
        .my-avatar
            .avatar-bordar
                img(src="@/images/avatar.jpeg")
        .my-introduce
            h3 发展方向
            p 热爱前端，为了统一的大前端梦想而努力奋斗。喜欢折腾服务器、正在研究从 git 到 docker 的部署流程，致力于构建简洁的自动 CI / CD。
        //- .my-info
        //-     h3 个人信息
        //-     .content
        //-         strong 姓名：
        //-         span XXX
        //-         br
        //-         strong 年龄：
        //-         span 22岁
        //-         br
        //-         strong 地址：
        //-         span 山东菏泽
        //-         br
    hr
    .sub-title 如何找到我？
    //- page-title(title="如何找到我?" summary="更多信息、更多分享、更多回忆")
    .link-area
        link-item.link-item(v-for="item, index in linkList" :key="index" :detail="item")
    navigation-bar(:menus="menus" :select="selectedPageIndex")
</template>

<script>
import PageTitle from '../PageTitle'
import NavigationBar from '../NavigationBar'
import LinkItem from '../LinkItem'

export default {
    name: 'MyDetail',
    data: () => ({
        linkList: [
            { 
                key: '简书', 
                label: '简书 - 个人博客',
                src: 'https://www.jianshu.com/u/3ee5572a4346', 
                icon: require('@/images/icon/jianshu.svg')
            },
            { 
                key: 'github', 
                label: 'github.com/hopgoldy',
                src: 'https://github.com/HoPGoldy', 
                icon: require('@/images/icon/github.svg')
            },
            { 
                key: '邮箱', 
                label: 'hopgoldy@gmail.com', 
                src: 'mailto:hopgoldy@gmail.com?subject=hello hopgoldy!',
                icon: require('@/images/icon/email.svg')
            },
            { 
                key: '邮箱', 
                label: 'steam 一起嗨皮!',
                src: 'https://steamcommunity.com/id/272256000',
                icon: require('@/images/icon/steam.svg')
            },
        ],
        // 导航菜单数据
        menus: [
            { label: '介 绍', value: '.anchor1' },
            { label: '履 历', value: '.anchor2' },
            { label: '能 力', value: '.anchor3' },
            { label: '项 目', value: '.anchor4' },
        ],
        // 导航菜单页面距离页面流顶端的距离，由 getAllPageOffsetTop 方法自动填充
        menusOffsetTop: [],
        // 当前应高亮的导航条索引
        selectedPageIndex: 0
    }),
    components: { PageTitle, NavigationBar, LinkItem },
    methods: {
        /**
         * 获取所有信息页面组件到页面流顶部的距离
         */
        getAllPageOffsetTop() {
            this.menusOffsetTop = this.menus.map(menu => {
                return this.getElementToPageTop(document.querySelector(menu.value))
            })
        },
        /**
         * 页面滚动监听
         * 判断窗口滚动到了哪个信息页的位置
         */
        onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            for (let index in this.menusOffsetTop) {
                index = Number(index)
                // 当前滚动到的页面高度要大于某个信息页的高
                if (scrollTop >= this.menusOffsetTop[index]) {
                    const nextOffset = this.menusOffsetTop[index + 1]
                    // 如果是最后一个页面的话就i直接高亮最后一个
                    if (!nextOffset) {
                        this.selectedPageIndex = index
                        break
                    }
                    // 当前滚动到的高度要小于下个信息页的高度，这样才算在某个页的区间内
                    if (scrollTop < nextOffset) {
                        this.selectedPageIndex = index
                        break
                    }
                }
            }
        }
    },
    mounted() {
        this.getAllPageOffsetTop()
        window.addEventListener('scroll', this.onScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.onScroll)
    }
}
</script>
