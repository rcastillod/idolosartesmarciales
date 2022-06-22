<template>
    <div v-if="!notFound" class="peleador">
        {{this.peleador.id}}
        {{this.peleador.nombre}}
        {{this.peleador.imgSrc}}
    </div>
    <div v-else class="div">
        <p>El peleador que buscaste no existe</p>
    </div>
</template>

<script>
export default {
    name: 'peleador-comp',
    props: ['id'],
    data: function(){
        return {
            peleador: {},
            notFound: false
        }
    },
    // computed: {},
    methods: {
        async getPeleador() {
            try {
                let url = 'http://localhost:8080/peleadores.json'
                let response = await fetch(url)
                if(!response.ok) throw ('Ocurrió un error en la petición.')

                let data = await response.json()
                let result = data.find(element => element.id == this.id)
                if ( result != undefined ) {
                    this.peleador = result
                } else {
                    this.notFound = true
                }
            }
            catch(error) {
                console.log(error)
            }
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.getPeleador()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>