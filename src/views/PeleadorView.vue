<template>
    <div>
        <Heading :title="title"></Heading>
        <PeleadorComp :id="this.id"></PeleadorComp>
    </div>
</template>

<script>
import Heading from '@/components/Heading.vue'
import PeleadorComp from '@/components/PeleadorComp.vue'

export default {
    name: 'peleador-view',
    props: ['id'],
    data: function(){
        return {
            title: 'Peleador'
        }
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Heading,
        PeleadorComp
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>