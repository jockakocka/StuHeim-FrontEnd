import axios from 'axios';
import {getServerApiURL} from '../../shared/app.properties';
import {getCurrentAccessToken} from './../../shared/app.properties';

const SERVER_API_URL = getServerApiURL();
const MODULE_SEARCH_REQUEST_API_CONTEXT = "/main_search_requests";


export const getAppHealth = () => {
    return axios({
        method: 'get',
        url: SERVER_API_URL + "/health" + "?access_token="+ getCurrentAccessToken(),
        headers: {
            'Content-type': 'application/json;utf-8',
        }
    }).then(response => response);
};