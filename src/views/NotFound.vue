<template>
    <div class="container">
        <div class="notFoundWrapper flex direction-column">
            <img src="../assets/page-notfound.svg" width="1000">
            <h1>Lo sentimos, la página que estas buscando no existe!</h1>
            <a @click="toHome()" class="backToHome">Volver al Home</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .notFoundWrapper {
        --gap: 3.125rem;
        align-items: center;
        justify-content: center;
        padding-top: 12.5rem;
    }
    .notFoundWrapper h1 {
        color: hsl(var(--black-color));
    }
    .backToHome {
        background-color: hsl(var(--primary-color));
        border-radius: .3125rem;
        color: hsl(var(--white-color));
        cursor: pointer;
        padding: .625em 1.25em;
        transition: background 300ms ease-in-out;
    }
    .backToHome:hover,
    .backToHome:focus {
        background-color: hsl(var(--primary-color-shade));
    }
</style>