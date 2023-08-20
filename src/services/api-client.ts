import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'92f6aa84dd8a489ab73374a5eea0e923'
    }
})