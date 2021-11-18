import {
    ADD_USER_TO_GROUP_SUCCESS,
    CLEAR_GROUP_REQUEST,
    CREATE_GROUP_FAIL,
    CREATE_GROUP_SUCCESS,
    DELETE_GROUP_FAIL,
    DELETE_GROUP_SUCCESS,
    GET_ALL_GROUPS_SUCCESS,
    GET_ALL_USERS_BY_GROUP_SUCCESS,
    GET_GROUP_SUCCESS,
    REMOVE_USER_FROM_GROUP_FAIL,
    REMOVE_USER_FROM_GROUP_SUCCESS,
    RESET_REDIRECT,
    UPDATE_GROUP_FAIL,
    UPDATE_GROUP_REQUEST,
    UPDATE_GROUP_SUCCESS
} from "../groups/groups.actions"

export function groupsReducer(currentState = {allgroupsdata: -1, singlegroup: -1, group: -1}, action) {
    switch (action.type) {  
        case GET_ALL_GROUPS_SUCCESS:
            return {
                ...currentState,
                allgroupsdata: action.payload
            };

        case CREATE_GROUP_SUCCESS:

            return {
                ...currentState,
                singlegroup: action.payload,
                redirectBack: true,
                loading: false

            };
    
        case CREATE_GROUP_FAIL:


            return {
                ...currentState,
                error: true,
                loading: false
                // singleuser: action.payload
            };
            case GET_GROUP_SUCCESS:


                return {
                ...currentState,
               singlegroup: action.payload,
                loading: false

            };
            case DELETE_GROUP_SUCCESS:


                return {
                ...currentState,
                removed: action.payload.data,
                redirectBack: true,
                loading: false,
                singlegroup: action.payload
            };

        case DELETE_GROUP_FAIL:


            return {
                ...currentState,
                removed: action.payload.data,
                redirectBack: true,
                loading: false,

                singlegroup: action.payload
            };
        case UPDATE_GROUP_SUCCESS:

            return {
                ...currentState,
                singlegroup: action.payload,
                redirectBack: true,
                loading: false
            };
    
        case UPDATE_GROUP_FAIL:


            return {
                ...currentState,
                error: true,
                loading: false
                // singleuser: action.payload
            };

        case GET_ALL_USERS_BY_GROUP_SUCCESS:
        // action.payload.data = action.payload.data.data.map(function(obj)
        //         {return new User(obj)}
        //     );

            return{
                ...currentState,
                error:false,
                loading:false,
                allusersdata: action.payload.data
            }

        case ADD_USER_TO_GROUP_SUCCESS:
            return {
                ...currentState,
                loading: false
            };

        //remove user from group
        case REMOVE_USER_FROM_GROUP_SUCCESS:
        return {
            ...currentState,
            success: action.payload,
            loading: false

        };

        //remove user from group
        case REMOVE_USER_FROM_GROUP_FAIL:
        return {
            ...currentState,
            loading: false

        };

        

        case UPDATE_GROUP_REQUEST:

            return {
                    ...currentState,
                    loading: true
            };
            
        case CLEAR_GROUP_REQUEST:
            return{
                ...currentState,
                singlegroup: undefined
            }
        

        case RESET_REDIRECT:
            return {
                ...currentState,
                redirectBack: false
            };
            

            default:
            return currentState;
        }

        
        
    }