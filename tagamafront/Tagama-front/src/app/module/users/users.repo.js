import axios from 'axios';
import {getCurrentAccessToken, getServerApiURL} from '../../shared/app.properties';

const SERVER_API_URL                = getServerApiURL();
const MODULE_USERS_API_CONTEXT      = "/users";

export const fetchAllUsers = (payload) => {
    return fetch(SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/all?page="+ payload.page +"&size=" + payload.size + "&filter="+payload.filter+ "&access_token="+getCurrentAccessToken())
        .then(response => response.json());
};


export const fetchUser = (payload) => {
    return fetch(SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/" + payload.id + "?access_token=" + getCurrentAccessToken())
        .then(response => response.json());
};

export const createUser = (payload) => {

    return axios({
        method: 'post',
        url: SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/create?access_token="+getCurrentAccessToken(),
        data: payload.user,
        headers:{
                'Content-type':'application/json;utf-8'
        }
        }).then(response => response);
};

export const deleteUser = (payload) => {
    return axios({
        method: 'delete',
        url: SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/delete/" + payload.user.id + "?access_token="+getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};

export const updateUser = (payload) => {
    return axios({
        method: 'put',
        data: payload.user,
        url: SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/update?access_token="+getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};

export const resetPasswordUser = (payload) => {
    return axios({
        method: 'put',
        data: payload.user,
        url: SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/reset_password?access_token="+getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};

export const fetchUsersFilteredByUsername = (payload) => {

    return fetch(SERVER_API_URL + MODULE_USERS_API_CONTEXT + "/all?page="+ payload.page +"&size=" + payload.size + "&filter=" + payload.filter + "&access_token="+getCurrentAccessToken())
        .then(response => response.json());
};


