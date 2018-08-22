<template>
<div class="outer">
    <myheader/>

    <article>
        <nuxt/>
    </article>

    <aside className="sidebar-right">
    Sidebar
    </aside>

    <footer> Footer
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <a class="right" href="https://github.com/tomimick/tm-nuxtjs-starter">Source at Github</a>
    </footer>
</div>
</template>

<script>
import myheader from '~/components/myheader.vue'

export default {
    components: {
        myheader
    },
    mounted() {
        console.info("default mounted");

        // always query movies at the start of the app, no matter what
        // page gets loaded first (actually we just need the count in
        // the header but for simplicity there is no separate API for
        // count only)
        this.$store.dispatch('fetch_movies')
    },
    methods: {},
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: []
    }
}
</script>

<style lang="sass">
</style>

