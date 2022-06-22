<template>
    <section class="heading">
        <div class="container">
            <h1>{{title}}</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'heading-comp',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data: function(){
        return {}
    },
}
</script>

<style scoped>
    .heading {
        background-image: url('../assets/heading-bg.jpg');
        background-size: cover;
        background-position: center;
        padding-block: 9.375rem;
        text-align: center;
    }
    .heading h1 {
        color: hsl(var(--white-color));
        font-size: 3.125rem;
    }
</style>