import axios from 'axios';


export const getDatas = async () => {

    const encodedParams = new URLSearchParams();
    encodedParams.set('location_id', '297704');
    encodedParams.set('language', 'en_US');
    encodedParams.set('currency', 'USD');
    encodedParams.set('offset', '0');

    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/actors',
        headers: {
            'X-RapidAPI-Key': '8a0b4388afmsh7ff887cca690cdep151b55jsnbca9dc528df8',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return error;
    }
}