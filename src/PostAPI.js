import axios from 'axios';

const openPosts = axios.create({
  baseURL: 'https://my-json-server.typicode.com/tpatel29/DatabaseFile',
});


const getAccounts =  async () => {
  try {
    const response = await openPosts.get("/acc");
    // console.log(response.data);
    return response.data;

  } catch (error) {
    console.error('Error making API Request', error);
    throw error;
  }
};



export default getAccounts;
