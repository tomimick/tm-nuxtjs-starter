
/* ServerAPI talks REST with the backend server.
 *
 * All server communication takes place via this singleton module!
 *
 * Calls return promises.
 *
 * (Wish I could use async/await but browser support is still lacking.)
 */

import axios from "axios"

const URL_MOVIES = "/api/movies";

class ServerAPI {

    constructor() {
    }

    query_movies() {
        let url = URL_MOVIES;
        return axios.get(url);
        // have a cache here so the request would not always reach server
    }

    get_movie(id) {
        let url = `${URL_MOVIES}/${id}`;
        return axios.get(url);
    }

    save_movie(item) {
        let url = URL_MOVIES;
        return axios.post(url, item);
    }

    delete_movie(id) {
        let url = `${URL_MOVIES}/${id}`;
        return axios.delete(url);
    }
}

// export singleton API
const api = new ServerAPI();
export default api;

