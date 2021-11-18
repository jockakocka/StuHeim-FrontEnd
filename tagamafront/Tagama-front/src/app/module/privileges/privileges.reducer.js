import {
    ADD_USER_PRIVILEGE_FAIL,
    ADD_USER_PRIVILEGE_REQUEST,
    ADD_USER_PRIVILEGE_SUCCESS,
    GET_ALL_GROUPS_BY_PRIVILEGE_FAIL,
    GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS,
    GET_ALL_PRIVILEGES_FAIL,
    GET_ALL_PRIVILEGES_SUCCESS,
    GET_ALL_USERS_BY_PRIVILEGE_FAIL,
    GET_ALL_USERS_BY_PRIVILEGE_SUCCESS,
    GET_GROUPS_FILTERED_BY_NAME_SUCCESS,
    GET_USERS_FILTERED_BY_NAME_SUCCESS,
    REMOVE_USER_PRIVILEGE_FAIL,
    REMOVE_USER_PRIVILEGE_REQUEST,
    REMOVE_USER_PRIVILEGE_SUCCESS
} from "./privileges.actions";

export function privilegesReducer(currentState = 
    {selectedPrivilege:{id: 1,
                name: "ADMIN"}}, action) {
    switch (action.type) {  
            case GET_ALL_PRIVILEGES_SUCCESS:
            return {
                ...currentState,
                allprivilegesdata: action.payload.data
            };

            case GET_ALL_PRIVILEGES_FAIL:
            return {
                ...currentState,
                error: true
            };

            //users by privilege
            case GET_ALL_USERS_BY_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                allusersdata: action.payload.data
            };

            case GET_ALL_USERS_BY_PRIVILEGE_FAIL:
            return {
                ...currentState,
                error: true
            };


            //groups by privilege
            case GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS:

            return {
                ...currentState,
                allgroupsdata: action.payload.data
            };

            case GET_ALL_GROUPS_BY_PRIVILEGE_FAIL:
            return {
                ...currentState,
                error: true
            };


            //add privilege to user
            case ADD_USER_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                loading: false
            };

            case ADD_USER_PRIVILEGE_FAIL:
            return {
                ...currentState,
                loading: false
            };

            //remove privilege from user
            case REMOVE_USER_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                success: action.payload,
                loading: false

            };

            case REMOVE_USER_PRIVILEGE_FAIL:
            return {
                ...currentState,
                loading: false
            };

            //add privilege to group


            //remove privilege from group


            // catch filtered users
            case GET_USERS_FILTERED_BY_NAME_SUCCESS:
            
            return {
                ...currentState,
                filteredUsers: action.payload
            };

            case GET_GROUPS_FILTERED_BY_NAME_SUCCESS:

                return {
                ...currentState,
                filteredGroups: action.payload
            };


            // loading and notify
            case ADD_USER_PRIVILEGE_REQUEST:
            return {
                ...currentState,
                loading: true
            };

            case REMOVE_USER_PRIVILEGE_REQUEST:
            return {
                ...currentState,
                loading: true
            };


            default:
            return currentState;
    }
}