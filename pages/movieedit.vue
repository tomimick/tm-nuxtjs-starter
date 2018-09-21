<template>
<div>
    <h2>{{oldtitle}}</h2>

    <form v-on:submit.prevent="onSubmit">
    <div>
        <label>Title:</label>
        <input type="text" name="title" v-model="movie.title"
            autoFocus autoComplete="off" />
    </div>
    <div>
        <label>Director:</label>
        <input type="text" name="director" v-model="movie.director"
            autoComplete="off" />
    </div>

    <a href="#" class="but back" @click.prevent="onBack">Back</a>

    <button type="submit">Save</button>
    </form>
</div>
</template>

<script>
import api from "../config"

export default {
    components: {},
    mounted() {
        var t = this;
        console.info("edit mounted", t.movie_id);

        if (t.movie_id) {
            api.get_movie(t.movie_id).then(data => {
                t.movie = data;
                t.oldtitle = t.movie.title;
            }).catch(() => {});
        }
    },
    data() {
        return {
            oldtitle: "New movie",
            movie:{title:""},
        }
    },
    head() {
        return {
            title: this.oldtitle
        }
    },
    asyncData(params) {
        // pick query params, result will be merged with data
        return {movie_id: params.query.id};
    },
    methods: {
        onBack() {
            this.$router.go(-1);
        },
        onSubmit() {
            var t = this;

            if (!t.movie.title)
                return;

            // save the data and go to home page which refreshes itself
            api.save_movie(t.movie)
                .then(reply => t.$router.push('/'))
                .catch(error => alert("Error occurred"));
        }
    }
}
</script>

