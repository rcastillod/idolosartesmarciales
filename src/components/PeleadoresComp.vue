<template>
    <div class="container">
        <div class="peleadoresWrapper grid">
            <div v-for="peleador in peleadores" :key="peleador.id" class="peleadorCard">
                <div class="peleadorCard__thumb">
                    <figure>
                        <a @click="getRoute(peleador.id)">
                            <img :src="peleador.imgSrc" :alt="peleador.nombre">
                        </a>
                    </figure>
                </div>
                <div class="peleadorCard__name">
                    <a @click="getRoute(peleador.id)"><h3>{{peleador.nombre}}</h3></a>
                </div>
            </div>
        </div>
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
                let url = '../peleadores.json'
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
    //components: {},
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
    .peleadoresWrapper {
        --gap: 3.125rem;
        row-gap: 7.5rem;
        margin: 9.375rem 0 6.25rem;
    }
    @media ( min-width: 576px ) {
        .peleadoresWrapper {
            row-gap: 9.375rem;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media ( min-width: 768px ) {
        .peleadoresWrapper {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .peleadorCard {
        border-radius: .625rem;
        box-shadow: 0 5px 20px hsl(var(--black-color)/.1);
        padding: 1.875rem;
    }
    .peleadorCard__thumb {
        border-radius: inherit;
        cursor: pointer;
        margin-top: -6.25rem;
        position: relative;
        overflow: hidden;
    }
    .peleadorCard__thumb::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        height: .3125rem;
        width: 20%;
        background-color: hsl(var(--primary-color));
        transform: translateX(-50%);
        transition: width 300ms ease-in-out;
    }
    .peleadorCard__thumb figure {
        height: 12.5rem;
    }
    .peleadorCard__thumb img {
        transition: transform 300ms ease-in-out;
        object-fit: cover;
        object-position: top;
        height: 100%;
        width: 100%;
    }
    .peleadorCard__name {
        padding-block: 1.875rem;
        text-align: center;
    }
    .peleadorCard__name a {
        color: hsl(var(--black-color)/.0);
        cursor: pointer;
        display: inline-block;
        background: 
            linear-gradient( 90deg, #fff 50%, hsl(var(--black-color)) 0) calc(100% - var(--_p, 0%)) / 200% 100%,
            linear-gradient(hsl(var(--primary-color)) 0 0) 0% 100%/var(--_p,0%) 100% no-repeat;
        -webkit-background-clip: text,padding-box;
        background-clip: text,padding-box;
        transition: 0.5s;
    }
    /** Hover */
    .peleadorCard:hover .peleadorCard__thumb::after {
        width: 100%;
    }
    .peleadorCard:hover img {
        transform: scale(1.1);
    }
    .peleadorCard__name a:hover {
        --_p: 100%;
    }
</style>