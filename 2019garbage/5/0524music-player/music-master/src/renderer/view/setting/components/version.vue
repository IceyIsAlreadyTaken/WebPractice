<template>
    
</template>
<script>
    import menuItem from './menu-item.vue'
    import {remote} from 'electron'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            menuItem
        },
        data() {
            return {
                version: remote.app.getVersion(),
                loading: false
            }
        },
        computed: {
            ...mapState('user', ['setting']),
        },
        methods: {
            ...mapActions('user', ['checkUpdate']),
            // 检查更新
            async _checkUpdate() {
                this.loading = true
                await this.checkUpdate()
                this.loading = false
            },
            // 意见反馈
            openIssues() {
                remote.shell.openExternal('https://github.com/sunzongzheng/music/issues/new')
            }
        }
    }
</script>
<style lang="scss" module="s">
    .btn {
        height: 22px;
        padding: 0 24px;
        margin-left: 4px;
    }
</style>