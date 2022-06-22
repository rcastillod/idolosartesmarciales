<template>
    <nav>
        <div class="container flex">
            <a class="logo">
                <img src="../assets/logo.svg" width="100" alt="Fight Club">
            </a>
            <div class="link-wrapper flex">
                <router-link to="/">Home</router-link>
                <router-link to="/buscador">Buscador</router-link>
                <router-link to="/peleadores">Peleadores</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navigation-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>