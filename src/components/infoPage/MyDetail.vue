<style lang="stylus" scoped>
+mediaDesktop()
    @import '../../styles/desktop/infoPage/MyDetail'
+mediaMobile()
    @import '../../styles/mobile/infoPage/MyDetail'
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
                img(src="https://s1.ax1x.com/2020/03/25/8jTKyV.jpg")
        .my-introduce
            h3 发展方向
            p 热爱前端，为了统一的大前端梦想而努力奋斗。喜欢折腾服务器、正在研究从 git 到 docker 的部署流程，致力于构建简洁的自动 CI / CD。
    hr
    .sub-title 如何找到我？
    //- page-title(title="如何找到我?" summary="更多信息、更多分享、更多回忆")
    .link-area
        link-item.link-item(v-for="item, index in linkList" :key="index" :detail="item")
    navigation-bar.nav-bar(:menus="menus" :select="selectedPageIndex")
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
