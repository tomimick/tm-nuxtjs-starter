<template>
<div>
    <h2>{{movie.title}} - Details</h2>

    <p>ID = {{movie.id}}</p>
    <p>Title = {{movie.title}}</p>
    <p>Director = {{movie.director}}</p>

    <a href="#" class="but back" @click.prevent="onBack">Back</a>

    <nuxt-link :to="editlink()"><a class="but">Edit</a></nuxt-link>

    <a class="but right delete" href="#"
        @click.prevent="onDelete">Delete</a>
</div>
</template>

<script>
import api from "../serverapi"

export default {
    components: {},
    mounted() {
        var t = this;
        console.info("details mounted", t.movie_id);

        api.get_movie(t.movie_id).then(data => t.movie = data).catch(() => {});
    },
    data() {
        return {
            title: '',
            movie:{},
        }
    },
    head() {
        return {
            title: this.movie.title
        }
    },
    asyncData(params) {
        // pick query params, result will be merged with data
        return {movie_id: params.query.id};
    },
    methods: {
        editlink() {
            return "/movieedit?id="+this.movie.id;
        },
        onBack() {
            this.$router.go(-1);
        },
        onDelete() {
            if (!confirm("Delete this movie?"))
                return;

            api.delete_movie(this.movie_id);
            this.$router.go(-1);
        }
    }
}
</script>

