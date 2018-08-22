<template>
    <header>
        <p class="right">Movies: {{$store.getters.count}}</p>
        <h1>Vue + Nuxt.js + Vuex starter</h1>
        <p class="author">by Tomi Mickelsson</p>
    </header>
</template>

<script>
export default {
    mounted() {
        console.info("myheader mounted");
    }
}
</script>

