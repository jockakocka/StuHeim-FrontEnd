import axios from 'axios';
import {getServerApiURL, getCurrentAccessToken} from '../../shared/app.properties';

const SERVER_API_URL                =  getServerApiURL();
const MODULE_GROUPS_API_CONTEXT      = "/groups";

export const fetchAllGroups = (payload) => {

    return fetch(SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/all?page="+ payload.page +"&size=" + payload.size + "&access_token="+getCurrentAccessToken() )
        .then(response => response.json());
};
export const fetchGroup = (payload) => {

    return fetch(SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/" + payload.id + "?access_token="+getCurrentAccessToken() )
            .then(response => response.json());
    };

export const createGroup = (payload) => {

    return axios({
        method: 'post',
        url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/create?access_token="+getCurrentAccessToken(),
        data: payload.group,
        headers:{
                'Content-type':'application/json;utf-8'
        }
        }).then(response => response);
};

export const fetchGroupsFilteredByName = (payload) => {
    return fetch(SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/all?page="+ payload.page +"&size=" + payload.size + "&filter=" + payload.filter + "&access_token="+getCurrentAccessToken())
        .then(response => response.json());
};
export const deleteGroup = (payload) => {


    return axios({
            method: 'delete',
            url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/delete/" + payload.group.id+"?access_token="+getCurrentAccessToken(),
            headers:{
                    'Content-type':'application/json;'
            }
            }).then(response => response);
    };
    
    export const updateGroup = (payload) => {


        return axios({
            method: 'put',
            data: payload.group,
            url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/update?access_token="+getCurrentAccessToken(),
            headers:{
                    'Content-type':'application/json;'
            }
            }).then(response => response);
    };



    export const fetchAllUsersByGroup = (payload) => {
        return axios({
            method: 'get',
            url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/" + payload.id + "/members?page=0&size=10000" + "&access_token="+getCurrentAccessToken(),
            headers:{
                    'Content-type':'application/json;'
            }
            }).then(response => response);
    };

    export const addUserToGroup = (payload) => {
        return axios({
                method: 'post',
                url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + "/" + payload.group.id + "/add_member?userId=" + payload.user.id + "&access_token="+getCurrentAccessToken(),
                headers:{
                'Content-type':'application/json;'
                }
        }).then(response => response);
    }

    export const removeUserFromGroup = (payload) => {
            return axios({
                method: 'delete',
                url: SERVER_API_URL + MODULE_GROUPS_API_CONTEXT + '/' + payload.group.id  + "/remove_member" + "?userId=" + payload.user.id + "&access_token="+getCurrentAccessToken(),
                headers:{
                        'Content-type':'application/json;'
                }
                }).then(response => response);
        
    }