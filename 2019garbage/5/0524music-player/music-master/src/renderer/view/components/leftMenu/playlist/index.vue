<template>
   
</template>
<script>
    import {mapState} from 'vuex'
    import menuSection from '../components/menu-section.vue'
    import playlistItem from '../components/playlist-item.vue'
    import addIcon from '../components/addIcon.vue'

    export default {
        components: {menuSection, playlistItem, addIcon},
        data() {
            return {
                add: false, // 添加中
                createDefaultName: '',
                loading: {
                    rename: false,
                    del: false,
                    create: false
                }
            }
        },
        computed: {
            ...mapState('user', ['info']),
            ...mapState('playlist', ['playlist'])
        },
        methods: {
            getName() {
                let num = 1
                let name = '新建歌单'
                while (num) {
                    if (this.playlist.filter(item => item.name === (name + num)).length) {
                        num++
                    } else {
                        name += num
                        num = 0
                    }
                }
                return name
            },
            // 重命名
            async rename(name, id) {
                this.loading.rename = true
                try {
                    await this.$http.put(`/playlist/${id}`, {
                        name
                    })
                    await this.$store.dispatch('playlist/init')
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    })
                } catch (e) {
                }
                this.loading.rename = false
            },
            // 删除
            async del(id) {
                this.loading.del = true
                try {
                    await this.$http.delete('/playlist', {
                        params: {
                            id
                        }
                    })
                    await this.$store.dispatch('playlist/init')
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                } catch (e) {
                }
                this.loading.del = false
            },
            // 显示输入框
            showAddInput() {
                this.createDefaultName = this.getName()
                this.add = true
            },
            // 保存新歌单
            async create(name) {
                if (!name) {
                    this.add = false
                    return
                }
                if (this.playlist.filter(item => item.name === name).length) {
                    this.$message({
                        message: '不允许创建同名歌单',
                        type: 'warning'
                    })
                    this.add = false
                    return
                }
                this.loading.create = true
                try {
                    await this.$store.dispatch('playlist/add', name)
                    this.$store.dispatch('playlist/init')
                    this.add = false
                } catch (e) {
                }
                this.loading.create = false
            }
        }
    }
</script>
<style lang="scss" module="s"></style>