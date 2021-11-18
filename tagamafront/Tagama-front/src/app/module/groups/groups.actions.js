export const GET_ALL_GROUPS_REQUEST = "GET_ALL_GROUPS_REQUEST";
export const GET_ALL_GROUPS_SUCCESS = "GET_ALL_GROUPS_SUCCESS";
export const GET_ALL_GROUPS_FAIL = "GET_ALL_GROUPS_FAIL";

export function fetchAllGroups(page, size){

    return {
        type: GET_ALL_GROUPS_REQUEST,
        payload: {
            page: page, 
            size: size
        } 
    };
}

export const GET_ALL_USERS_BY_GROUP_REQUEST = "GET_ALL_USERS_BY_GROUP_REQUEST";
export const GET_ALL_USERS_BY_GROUP_SUCCESS = "GET_ALL_USERS_BY_GROUP_SUCCESS";
export const GET_ALL_USERS_BY_GROUP_FAIL = "GET_ALL_USERS_BY_GROUP_FAIL";

export function fetchAllUsersByGroup(group){

    return {
        type:GET_ALL_USERS_BY_GROUP_REQUEST,
        payload: group,
    }
}

export const CREATE_GROUP_REQUEST = "CREATE_GROUP_REQUEST";
export const CREATE_GROUP_SUCCESS = "CREATE_GROUP_SUCCESS";
export const CREATE_GROUP_FAIL = "CREATE_GROUP_FAIL";

export function createGroup(group){


    return {
        type: CREATE_GROUP_REQUEST,
        payload: {group: group}
    };
}

export const GET_GROUP_REQUEST = "GET_GROUP_REQUEST";
export const GET_GROUP_SUCCESS = "GET_GROUP_SUCCESS";
export const GET_GROUP_FAIL = "GET_GROUP_FAIL";

export function fetchGroup(id){

    return {
        type: GET_GROUP_REQUEST,
        payload: {
            id: id, 
        } 
    };
}
export const CLEAR_GROUP_REQUEST = "CLEAR_GROUP_REQUEST";

export function clearGroup(){
    return {
        type: CLEAR_GROUP_REQUEST,
        payload: {}
    };
}
export const UPDATE_GROUP_REQUEST = "UPDATE_GROUP_REQUEST";
export const UPDATE_GROUP_SUCCESS = "UPDATE_GROUP_SUCCESS";
export const UPDATE_GROUP_FAIL = "UPDATE_GROUP_FAIL";

export function updateGroup(group){

    return {
        type: UPDATE_GROUP_REQUEST,
        payload: {group: group}
    };
}
export const DELETE_GROUP_REQUEST = "DELETE_GROUP_REQUEST";
export const DELETE_GROUP_SUCCESS = "DELETE_GROUP_SUCCESS";
export const DELETE_GROUP_FAIL = "DELETE_GROUP_FAIL";

export function deleteGroup(group){
    return {
        type: DELETE_GROUP_REQUEST,
        payload: {group: group}
    };
}

export const ADD_USER_TO_GROUP_REQUEST = "ADD_USER_TO_GROUP_REQUEST";
export const ADD_USER_TO_GROUP_SUCCESS = "ADD_USER_TO_GROUP_SUCCESS";
export const ADD_USER_TO_GROUP_FAIL = "ADD_USER_TO_GROUP_FAIL";

export function addUserToGroup(user, group){
    return {
        type: ADD_USER_TO_GROUP_REQUEST,
        payload: {user: user, group: group}
    };
}

export const REMOVE_USER_FROM_GROUP_REQUEST = "REMOVE_USER_FROM_GROUP_REQUEST";
export const REMOVE_USER_FROM_GROUP_SUCCESS = "REMOVE_USER_FROM_GROUP_SUCCESS";
export const REMOVE_USER_FROM_GROUP_FAIL = "REMOVE_USER_FROM_GROUP_FAIL";

export function removeUserFromGroup(user,group){
    return{
        type: REMOVE_USER_FROM_GROUP_REQUEST,
        payload: {user:user, group:group}
    }
}

export const RESET_REDIRECT = "RESET_REDIRECT";

export function resetRedirect(){
    return { 
        type: RESET_REDIRECT,
        payload: null
    }
}