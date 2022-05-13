import axios from 'axios';

const openPosts = axios.create({
    baseURL: 'https://my-json-server.typicode.com/tpatel29/DatabaseFile',
});

const getTransactions = async () => {
    try {
        const response = await openPosts.get("/transactions");
        // console.log(response.data);
        return response.data;

    } catch (error) {
        console.error('Error making API Request', error);
        throw error;
    }
};
export default getTransactions;
