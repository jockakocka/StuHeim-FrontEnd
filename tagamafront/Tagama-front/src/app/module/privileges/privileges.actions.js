export const GET_ALL_PRIVILEGES_REQUEST = "GET_ALL_PRIVILEGES_REQUEST";
export const GET_ALL_PRIVILEGES_SUCCESS = "GET_ALL_PRIVILEGES_SUCCESS";
export const GET_ALL_PRIVILEGES_FAIL = "GET_ALL_PRIVILEGES_FAIL";

export function fetchAllPrivileges(){
    return {
        type: GET_ALL_PRIVILEGES_REQUEST,
        payload: undefined
    };
}

export const GET_ALL_USERS_BY_PRIVILEGE_REQUEST = "GET_ALL_USERS_BY_PRIVILEGE_REQUEST";
export const GET_ALL_USERS_BY_PRIVILEGE_SUCCESS = "GET_ALL_USERS_BY_PRIVILEGE_SUCCESS";
export const GET_ALL_USERS_BY_PRIVILEGE_FAIL    = "GET_ALL_USERS_BY_PRIVILEGE_FAIL";

export function fetchAllUsersByPrivilege(privilege){
    return {
        type: GET_ALL_USERS_BY_PRIVILEGE_REQUEST,
        payload: privilege
    };
}

export const GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST = "GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST";
export const GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS = "GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS";
export const GET_ALL_GROUPS_BY_PRIVILEGE_FAIL = "GET_ALL_GROUPS_BY_PRIVILEGE_FAIL";
export function fetchAllGroupsByPrivilege(privilege){
    return {
        type: GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST,
        payload: privilege
    };
}

export const ADD_USER_PRIVILEGE_REQUEST = "ADD_USER_PRIVILEGE_REQUEST";
export const ADD_USER_PRIVILEGE_SUCCESS = "ADD_USER_PRIVILEGE_SUCCESS";
export const ADD_USER_PRIVILEGE_FAIL = "ADD_USER_PRIVILEGE_FAIL";
export function addUserPrivilege(user, privilege){
    return {
        type: ADD_USER_PRIVILEGE_REQUEST,
        payload: {privilege: privilege, user: user}
    };
}

export const REMOVE_USER_PRIVILEGE_REQUEST = "REMOVE_USER_PRIVILEGE_REQUEST";
export const REMOVE_USER_PRIVILEGE_SUCCESS = "REMOVE_USER_PRIVILEGE_SUCCESS";
export const REMOVE_USER_PRIVILEGE_FAIL = "REMOVE_USER_PRIVILEGE_FAIL";
export function removeUserPrivilege(user, privilege){
    return {
        type: REMOVE_USER_PRIVILEGE_REQUEST,
        payload: {privilege: privilege, user: user}
    };
}

export const ADD_GROUP_PRIVILEGE_REQUEST = "ADD_GROUP_PRIVILEGE_REQUEST";
export const ADD_GROUP_PRIVILEGE_SUCCESS = "ADD_GROUP_PRIVILEGE_SUCCESS";
export const ADD_GROUP_PRIVILEGE_FAIL = "ADD_GROUP_PRIVILEGE_FAIL";
export function addGroupPrivilege(group, privilege){
    return {
        type: ADD_GROUP_PRIVILEGE_REQUEST,
        payload: {privilege: privilege, group: group}
    };
}

export const REMOVE_GROUP_PRIVILEGE_REQUEST = "REMOVE_GROUP_PRIVILEGE_REQUEST";
export const REMOVE_GROUP_PRIVILEGE_SUCCESS = "REMOVE_GROUP_PRIVILEGE_SUCCESS";
export const REMOVE_GROUP_PRIVILEGE_FAIL = "REMOVE_GROUP_PRIVILEGE_FAIL";
export function removeGroupPrivilege(group, privilege){
    return {
        type: REMOVE_GROUP_PRIVILEGE_REQUEST,
        payload: {privilege: privilege, group: group}
    };
}


export const GET_USERS_FILTERED_BY_NAME_REQUEST = "GET_USERS_FILTERED_BY_NAME_REQUEST";
export const GET_USERS_FILTERED_BY_NAME_SUCCESS = "GET_USERS_FILTERED_BY_NAME_SUCCESS";
export function getUsersFilteredByName(page = 0, size = 5, filterValue){
    return {
        type: GET_USERS_FILTERED_BY_NAME_REQUEST,
        payload: {name: filterValue, page: page, size: size}
    };
}

export const GET_GROUPS_FILTERED_BY_NAME_REQUEST = "GET_GROUPS_FILTERED_BY_NAME_REQUEST";
export const GET_GROUPS_FILTERED_BY_NAME_SUCCESS = "GET_GROUPS_FILTERED_BY_NAME_SUCCESS";
export function getGroupsFilteredByName(page = 0, size = 10, name){
    return {
        type: GET_GROUPS_FILTERED_BY_NAME_REQUEST,
        payload: {page: page, size: size, name: name}
    };
}