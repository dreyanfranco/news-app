import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
});

export const getNews = async () => {
    return axiosInstance.get('/news')
};

export const getNewsById = (news_id: string) => {
    return axiosInstance.get(`/news/${news_id}`);
};

export const newNews = (pokemonData: any) => {
    return axiosInstance.post('/pokemons', pokemonData);
};

export const deleteNewsById = (pokemon_id: string) => {
    return axiosInstance.delete(`/pokemons/${pokemon_id}`)
};


