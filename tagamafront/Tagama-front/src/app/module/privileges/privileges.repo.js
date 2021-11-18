import axios from 'axios';
import {getServerApiURL} from '../../shared/app.properties';
import { getCurrentAccessToken } from './../../shared/app.properties';

const SERVER_API_URL                = getServerApiURL();
const MODULE_PRIVILEGES_API_CONTEXT      = "/privileges";

export const fetchAllPrivileges = (payload) => {
    return axios({
        method: 'get',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/all" + "?access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};

export const fetchAllUsersByPrivilege = (payload) => {
    return axios({
        method: 'get',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.id + "/users" + "?access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};

export const fetchAllGroupsByPrivilege = (payload) => {
    return axios({
        method: 'get',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.id + "/groups" + "?access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
};


export const addPrivilegeToUser = (payload) => {
    return axios({
        method: 'post',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.privilege.id + "/users/add?userId=" + payload.user.id + "&access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
}

export const removePrivilegeFromUser = (payload) => {

    return axios({
        method: 'delete',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.privilege.id + "/users/" + payload.user.id + "?access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
}

export const addPrivilegeToGroup = (payload) => {

    return axios({
        method: 'post',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.privilege.id + "/groups/add?groupId=" + payload.group.id + "&access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
}

export const removePrivilegeFromGroup = (payload) => {


    return axios({
        method: 'delete',
        url: SERVER_API_URL + MODULE_PRIVILEGES_API_CONTEXT + "/" + payload.privilege.id + "/groups/" + payload.group.id + "?access_token="+ getCurrentAccessToken(),
        headers:{
                'Content-type':'application/json;'
        }
        }).then(response => response);
}