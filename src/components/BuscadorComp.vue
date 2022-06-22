<template>
    <div class="search-wrapper">
        <div class="input-group grid">
            <input type="text" placeholder="Ingresa un id" v-model="id">
            <button @click="searchPeleador(id)">Buscar</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'buscador-comp',
    // props: {},
    data: function(){
        return {
            id: ''
        }
    },
    // computed: {},
    methods: {
        searchPeleador(id) {
            this.$router.push(`/peleador/${id}`)
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.search-wrapper {
    width: min(100%, 37.5rem);
}
input, button {
    font-size: clamp(1rem, 3vw, 1.625rem);
    font-weight: var(--fw-bold);
    padding: .625em;
}
input {
    border: none;
    color: hsl(var(--black-color));
}
input:active,
input:focus {
    outline: none;
}
button {
    background-color: hsl(var(--primary-color));
    border: none;
    color: hsl(var(--white-color));
    cursor: pointer;
    transition: background 450ms ease-in-out;
}
button:hover,
button:focus {
    background-color: hsl(var(--primary-color-shade));
}
</style>