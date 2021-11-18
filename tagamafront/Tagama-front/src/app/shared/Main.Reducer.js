import {
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_SUCCESS,
    RESET_PASSWORD_USER_SUCCESS,
    RESET_PASSWORD_USER_FAIL
} from "../module/users/users.actions";
import {
    ADD_GROUP_PRIVILEGE_FAIL,
    ADD_GROUP_PRIVILEGE_SUCCESS,
    ADD_USER_PRIVILEGE_FAIL,
    ADD_USER_PRIVILEGE_SUCCESS,
    GET_ALL_USERS_BY_PRIVILEGE_REQUEST,
    GET_ALL_USERS_BY_PRIVILEGE_SUCCESS,
    REMOVE_GROUP_PRIVILEGE_FAIL,
    REMOVE_GROUP_PRIVILEGE_SUCCESS,
    REMOVE_USER_PRIVILEGE_FAIL,
    REMOVE_USER_PRIVILEGE_SUCCESS
} from "../module/privileges/privileges.actions";
import {
    ADD_USER_TO_GROUP_SUCCESS,
    CREATE_GROUP_FAIL,
    CREATE_GROUP_SUCCESS,
    DELETE_GROUP_FAIL,
    DELETE_GROUP_SUCCESS,
    REMOVE_USER_FROM_GROUP_SUCCESS,
    UPDATE_GROUP_FAIL,
    UPDATE_GROUP_SUCCESS
} from "../module/groups/groups.actions";
// import { GET_MAIN_USER_REQUEST, GET_MAIN_USER_SUCCESS } from "../module/profile/profile.actions";


export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";
export const SET_LOADING_BAR = "SET_LOADING_BAR";
export const REMOVE_LOADING_BAR = "REMOVE_LOADING_BAR";

export function mainReducer(currentState = { success: false, error: false, loading: false }, action) {
    switch (action.type) {

        case "USER_LOGOUT":
            return {
                ...currentState
            }

        case CREATE_USER_SUCCESS:

            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "User created successfully"
            };

        case CREATE_USER_FAIL:

            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured creating new user"
            };

        case DELETE_USER_SUCCESS:

            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "User deleted successfully"
            };

        case DELETE_USER_FAIL:

            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured removing user"
            };

        case UPDATE_USER_SUCCESS:

            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "User updated successfully"
            };

        case RESET_PASSWORD_USER_SUCCESS:

            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "User password updated successfully"
            };

        case UPDATE_USER_FAIL:

            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured updating user"
            };

        case RESET_PASSWORD_USER_FAIL:

            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured updating user password"
            };

        case CLEAR_NOTIFICATIONS:

            return {
                ...currentState,
                open: false,
            };

        case GET_ALL_USERS_REQUEST:
            return {
                ...currentState,
                loading: true
            };

        

        case GET_ALL_USERS_BY_PRIVILEGE_REQUEST:
            return {
                ...currentState,
                loading: true
            }



        case GET_ALL_USERS_SUCCESS || GET_ALL_USERS_FAIL:
            return {
                ...currentState,
                loading: false
            };


        case GET_ALL_USERS_BY_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                loading: false
            };

        case 'SHOW_LOADING':
            return {
                ...currentState,
                loading: true
            };

        case 'HIDE_LOADING':
            return {
                ...currentState,
                loading: false
            };

        case REMOVE_USER_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully removed privilege from user"
            };

        case REMOVE_USER_PRIVILEGE_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured removing privilege from user"
            };

        case ADD_USER_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully added privilege from user"
            };

        case ADD_USER_PRIVILEGE_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured adding privilege from user"
            };

        case ADD_GROUP_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully added privilege to group"
            };

        case ADD_GROUP_PRIVILEGE_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured adding privilege to group"
            };

        case REMOVE_GROUP_PRIVILEGE_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully removed privilege from group"
            };

        case REMOVE_GROUP_PRIVILEGE_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured removing privilege from group"
            };

        case UPDATE_GROUP_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully updated group"
            };
        case UPDATE_GROUP_FAIL:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "An error occured updating group"
            };
        case DELETE_GROUP_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully deleted group"
            };
        case DELETE_GROUP_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured deleting group"
            };
        case CREATE_GROUP_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully created group"
            };
        case CREATE_GROUP_FAIL:
            return {
                ...currentState,
                variant: "error",
                open: true,
                message: "An error occured creating group"
            };

        case ADD_USER_TO_GROUP_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully added user to group"
            }

        case REMOVE_USER_FROM_GROUP_SUCCESS:
            return {
                ...currentState,
                variant: "success",
                open: true,
                message: "Successfully removed user from group"
            }




        default:
            return currentState;
    }
}