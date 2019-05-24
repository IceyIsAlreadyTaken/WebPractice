<template>
 
</template>
<script>
    import menuItem from './menu-item.vue'
    import {mapState, mapMutations} from 'vuex'

    export default {
        components: {
            menuItem
        },
        computed: {
            ...mapState('user', ['setting']),
            value: {
                get() {
                    return this.setting.macStatusBar
                },
                set(val) {
                    this.updateSetting({
                        macStatusBar: val
                    })
                    this.$ipc.send('toggle-tray', val)
                }
            }
        },
        methods: {
            ...mapMutations('user', ['updateSetting'])
        }
    }
</script>