<template>
    <div class="container">
        <div class="notFoundWrapper flex direction-column">
            <img src="../assets/page-notfound.svg" width="1000">
            <h1>Lo sentimos, la página que estas buscando no existe!</h1>
        </div>
    </div>
</template>

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
</style>