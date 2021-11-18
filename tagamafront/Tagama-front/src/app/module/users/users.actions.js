export const GET_ALL_USERS_REQUEST = "GET_ALL_USERS_REQUEST";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

export function fetchAllUsers(page, size, filter){
    return {
        type: GET_ALL_USERS_REQUEST,
        payload: {
            page:   page, 
            size:   size,
            filter: filter
        } 
    };
}


export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export function fetchUser(id){
    return {
        type: GET_USER_REQUEST,
        payload: {
            id: id, 
        } 
    };
}


export const CLEAR_USER_REQUEST = "CLEAR_USER_REQUEST";

export function clearUser(){
    return {
        type: CLEAR_USER_REQUEST,
        payload: {}
    };
}

export const INIT_USER_REQUEST = "INIT_USER_REQUEST";

export function initUser(){
    return {
        type: INIT_USER_REQUEST,
        payload: {}
    };
}


export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export function createUser(user){
    return {
        type: CREATE_USER_REQUEST,
        payload: {user: user}
    };
}


export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export function deleteUser(user){
    return {
        type: DELETE_USER_REQUEST,
        payload: {user: user}
    };
}


export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export function updateUser(user){
    return {
        type: UPDATE_USER_REQUEST,
        payload: {user: user}
    };
}

export const RESET_PASSWORD_USER_REQUEST = "RESET_PASSWORD_USER_REQUEST";
export const RESET_PASSWORD_USER_SUCCESS = "RESET_PASSWORD_USER_SUCCESS";
export const RESET_PASSWORD_USER_FAIL = "RESET_PASSWORD_USER_FAIL";

export function resetPasswordUser(user){
    return {
        type: RESET_PASSWORD_USER_REQUEST,
        payload: {user: user}
    };
}

export const RESET_REDIRECT = "RESET_REDIRECT";
export function resetRedirect(){
    return { 
        type: RESET_REDIRECT,
        payload: null
    }
}