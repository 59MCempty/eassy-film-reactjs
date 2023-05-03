import axios from "axios";
import {BASE_URL, API_KEY_PARAM} from "../config";
import {FAKE_POPULAR, FAKE_RECOMMENDATIONS} from "./fake_data";

// https://api.themoviedb.org/3/tv/popular?api_key=73981fdb74b547d23604e21fef98d7f6&language=en-US&page=1



export class filmApi {
    static async fetchApi() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return response.data.results
        // return FAKE_POPULAR
    }
    static async fetchApiRecommendations(tv_id) {
        const resRecommendations = await axios.get(`${BASE_URL}tv/${tv_id}/recommendations${API_KEY_PARAM}`)
        return resRecommendations.data.results
        // return FAKE_RECOMMENDATIONS
    }

    static async fetchApiSearch(title) {
        const resSearch = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`)
        return resSearch.data.results
        // return FAKE_RECOMMENDATIONS
    }


}