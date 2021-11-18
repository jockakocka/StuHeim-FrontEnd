import {
    GET_ALL_USERS_SUCCESS, GET_USER_SUCCESS, RESET_REDIRECT, CLEAR_USER_REQUEST,
    INIT_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL,
    DELETE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST,
    UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, GET_ALL_USERS_REQUEST, CREATE_USER_REQUEST, UPDATE_USER_REQUEST, GET_USER_REQUEST, RESET_PASSWORD_USER_SUCCESS, RESET_PASSWORD_USER_FAIL
} from "./users.actions";
import { User } from "../../model/user.model";

export function usersReducer(currentState = { allusersdata: -1, singleuser: -1, user: -1 }, action) {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            action.payload.data = action.payload.content.map(function (obj) { return new User(obj) }
            );
            return {
                ...currentState,
                allusersdata: action.payload
            };

        case CREATE_USER_SUCCESS:
            return {
                ...currentState,
                singleuser: action.payload,
                redirectBack: true,
                loading: false

            };

        case CREATE_USER_FAIL:
            return {
                ...currentState,
                error: true,
                loading: false
                // singleuser: action.payload
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...currentState,
                singleuser: action.payload,
                redirectBack: true,
                loading: false
            };

        case UPDATE_USER_FAIL:
            return {
                ...currentState,
                error: true,
                loading: false
                // singleuser: action.payload
            };

        case RESET_PASSWORD_USER_SUCCESS:
            return {
                ...currentState,
                singleuser: action.payload,
                redirectBack: true,
                loading: false
            };

        case RESET_PASSWORD_USER_FAIL:
            return {
                ...currentState,
                error: true,
                loading: false
                // singleuser: action.payload
            };

        case DELETE_USER_SUCCESS:
            return {
                ...currentState,
                removed: action.payload.data,
                redirectBack: true,
                loading: false
                // singleuser: action.payload
            };

        case DELETE_USER_FAIL:
            return {
                ...currentState,
                removed: action.payload.data,
                redirectBack: true,
                loading: false

                // singleuser: action.payload
            };

        case GET_USER_REQUEST:
            return {
                ...currentState,
                loading: true
            };
        case DELETE_USER_REQUEST:
            return {
                ...currentState,
                loading: true
            };
        case CREATE_USER_REQUEST:
            return {
                ...currentState,
                loading: true
            };
        case UPDATE_USER_REQUEST:
            return {
                ...currentState,
                loading: true
            };

        case GET_USER_SUCCESS:
            action.payload = new User(action.payload);

            return {
                ...currentState,
                singleuser: action.payload,
                loading: false

            };

        case CLEAR_USER_REQUEST:
            return {
                ...currentState,
                singleuser: undefined
            };

        case RESET_REDIRECT:
            return {
                ...currentState,
                redirectBack: false
            };

        default:
            return currentState;
    }
}