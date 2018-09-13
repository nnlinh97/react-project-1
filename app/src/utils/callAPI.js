import axios from 'axios';
import * as Config from './../constants/Config';


const callAPI = (endpoint, method = "GET", body) => {
    return axios({
        method: method,
        url: `${Config.URL}${endpoint}`,
        data: body
    })
    // .then((response) => {
        
    // })
    .catch((error) => {
        console.log(error);
    });
}

export default callAPI;