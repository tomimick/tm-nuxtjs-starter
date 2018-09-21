<template>
<div>
    <h2>List of movies</h2>

    <ol>
        <li v-for="movie in $store.state.movielist" :key="movie.id">
            <nuxt-link :to="detailslink(movie)">{{movie.title}}</nuxt-link>
             by {{movie.director}}
        </li>
    </ol>

    <nuxt-link to="/movieedit"><a class="but">Add a new movie</a></nuxt-link>

</div>
</template>

<script>
export default {
    components: {},
    mounted() {
        console.info("index mounted");

        // query movies and put into store, whenever this page gets activated
        this.$store.dispatch('fetch_movies');
    },
    data() {
        return {};
    },
    head: {
        title: 'Vue + Nuxtjs + Vuex starter'
    },
    methods: {
        detailslink(movie) {
            return "/moviedetails?id="+movie.id;
        }
    }
}
</script>

