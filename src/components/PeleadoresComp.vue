<template>
    <div>
        <h1>Peleadores</h1>
        <ul>
            <li v-for="peleador in peleadores" :key="peleador.id">
                <a @click="getRoute(peleador.id)">
                    <img :src="peleador.imgSrc" alt="">
                </a>
                <a @click="getRoute(peleador.id)">{{peleador.nombre}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'peleadores-comp',
    //props: {},
    data: function(){
        return {
            peleadores: [],
        }
    },
    // computed: {},
    methods: {
        async getPeleadores() {
            try {
                let url = 'http://localhost:8080/peleadores.json'
                let response = await fetch(url)
                if(!response.ok) throw ('Ocurrió un error en la petición.')

                let data = await response.json()
                this.peleadores = data
            }
            catch(error) {
                console.log(error)
            }
        },
        getRoute(id) {
            this.$router.push(`/peleador/${id}`)
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        return this.getPeleadores()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>