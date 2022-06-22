<template>
    <div class="container">
        <div class="peleadorWrapper">
            <div v-if="!notFound" class="peleadorSingle grid">
                <div class="peleadorSingle__thumb">
                    <figure>
                        <img :src="peleador.imgSrc" :alt="peleador.nombre">
                    </figure>
                </div>
                <div class="peleadorSingle__content">
                    <h2>{{peleador.nombre}}</h2>
                    <p>{{peleador.biografia}}</p>
                </div>
            </div>
            <div v-else class="peleadorNotFound flex direction-column">
                <img src="../assets/peleador-notfound.svg" width="150">
                <p>El peleador que buscaste no existe</p>
            </div>
        </div>
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
    .peleadorWrapper {
        padding-block: 6.25rem;
    }
    @media (min-width: 768px) {
        .peleadorSingle {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .peleadorSingle__thumb {
        overflow: hidden;
        position: relative;
    }
    .peleadorSingle__thumb::before {
        content: '';
        background-color: hsl(var(--primary-color));
        border-radius: .625rem;
        position: absolute;
        top: 0;
        left: 0;
        height: clamp(6.25rem, 50vw, 18.75rem);
        width: clamp(6.25rem, 50vw, 18.75rem);
        z-index: -1;
    }
    .peleadorSingle__thumb img {
        border-radius: .625rem;
        object-fit: cover;
        margin: 1.25rem 0 0 1.25rem;
        width: 90%;
    }
    @media (min-width: 768px) {
        .peleadorSingle__thumb img {
            margin: 1.875rem 0 0 1.875rem;
        }
        
    }
    @media ( min-width: 1330px ) {
        .peleadorSingle__thumb img {
            height: 31.25rem;
            width: 31.25rem;
        }
    }
    .peleadorSingle__content {
        margin-top: 1.875rem;
    }
    .peleadorSingle__content h2 {
        color: hsl(var(--black-color));
        font-size: 1.875rem;
        position: relative;
    }
    .peleadorNotFound {
        align-items: center;
    }
    .peleadorNotFound p {
        color: hsl(var(--black-color));
        font-size: 1.875rem;
    }
</style>