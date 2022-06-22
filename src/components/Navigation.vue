<template>
    <nav>
        <div class="container flex">
            <a class="logo">
                <img src="../assets/logo-02.svg" width="80" alt="Fight Club">
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
}
</script>

<style scoped>
nav {
    background-color: hsl(var(--white-color) / .5);
    backdrop-filter: blur(5px);
    padding: 1.25rem;
    position: absolute;
    width: 100%;
}

nav .container {
    align-items: center;
    justify-content: space-between;
}

nav a {
    font-weight: bold;
    color: hsl(var(--black-color));
    text-decoration: none;
    transition: color 450ms ease-in-out;
}

nav a:hover,
nav a:focus {
    color: hsl(var(--primary-color));
}

nav a.router-link-exact-active {
    color: hsl(var(--primary-color));
}

.link-wrapper {
    --gap: 2.5rem;
}
</style>