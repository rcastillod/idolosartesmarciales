<template>
    <div>
        <PeleadorComp :id="this.id"></PeleadorComp>
    </div>
</template>

<script>
import PeleadorComp from '@/components/PeleadorComp.vue'

export default {
    name: 'peleador-view',
    props: ['id'],
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
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