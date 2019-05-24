<template>
   
</template>
<script>
    import menuItem from './menu-item.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            menuItem
        },
        computed: {
            ...mapState('socket', ['onlineTotal'])
        }
    }
</script>