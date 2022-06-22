<template>
    <div>
        <Heading :title="title"></Heading>
        <PeleadoresComp></PeleadoresComp>
    </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import PeleadoresComp from '@/components/PeleadoresComp.vue'

export default {
    name: 'peleadores-view',
    //props: {},
    data: function(){
        return {
            title: 'Peleadores'
        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Heading,
        PeleadoresComp
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>