import axios from "axios";

const datadb =  axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '3520e70d2023aa39f18f2ba886910b37',
        lenguage: 'es-ES'
    }
})

export default datadb;
