/*
 * Data store, managed by Vuex - https://vuex.vuejs.org/
 *
 * Currently just holds our list of movies.
 */

import Vuex from 'vuex';
import api from "../config";

const store = () => {
    return new Vuex.Store({
        state: {
            movielist: []
        },
        // data getter helpers
        getters:{
            count(state) {
                return state.movielist.length;
            },
        },
        // syncronous mutations of data
        mutations: {
            set_movies(state, array) {
                state.movielist = array || [];
            },
        },
        // asynchronous actions that contain logic, mutate data
        actions: {
            // fetch movies from server
            fetch_movies(context) {
                api.query_movies().then(movies =>
                    context.commit('set_movies', movies));
            }
        },
    })
}

export default store;

