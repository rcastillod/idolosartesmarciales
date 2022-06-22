<template>
    <section class="hero">
        <div class="container">
            <h1>Busca un peleador por su id</h1>
            <BuscadorComp></BuscadorComp>
        </div>
    </section>
</template>

<script>
import BuscadorComp from '@/components/BuscadorComp.vue'

export default {
    name: 'buscador-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        BuscadorComp
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.hero {
    align-items: center;
    background-image: url('../assets/search-bg.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 12.5rem;
}
h1 {
    color: hsl(var(--white-color));
    font-size: clamp(38px, 10vw, 5rem);
    line-height: 1;
    margin-bottom: 2.5rem;
    width: min(100%, 37.5rem);
}

</style>