import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID f8d6c2d150d29755eca1f9f0d0b9a8bc4383921d449c6fbfdfc04ba5b667371e'
    }
});