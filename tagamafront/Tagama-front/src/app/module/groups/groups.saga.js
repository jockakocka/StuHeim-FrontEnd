import {call, put, takeEvery} from 'redux-saga/effects';
import {
    ADD_USER_TO_GROUP_FAIL,
    ADD_USER_TO_GROUP_REQUEST,
    ADD_USER_TO_GROUP_SUCCESS,
    CLEAR_GROUP_REQUEST,
    CREATE_GROUP_FAIL,
    CREATE_GROUP_REQUEST,
    CREATE_GROUP_SUCCESS,
    DELETE_GROUP_FAIL,
    DELETE_GROUP_REQUEST,
    DELETE_GROUP_SUCCESS,
    GET_ALL_GROUPS_FAIL,
    GET_ALL_GROUPS_REQUEST,
    GET_ALL_GROUPS_SUCCESS,
    GET_ALL_USERS_BY_GROUP_FAIL,
    GET_ALL_USERS_BY_GROUP_REQUEST,
    GET_ALL_USERS_BY_GROUP_SUCCESS,
    GET_GROUP_FAIL,
    GET_GROUP_REQUEST,
    GET_GROUP_SUCCESS,
    REMOVE_USER_FROM_GROUP_FAIL,
    REMOVE_USER_FROM_GROUP_REQUEST,
    REMOVE_USER_FROM_GROUP_SUCCESS,
    UPDATE_GROUP_FAIL,
    UPDATE_GROUP_REQUEST,
    UPDATE_GROUP_SUCCESS
} from '../groups/groups.actions';
import {
    addUserToGroup,
    createGroup,
    deleteGroup,
    fetchAllGroups,
    fetchAllUsersByGroup,
    fetchGroup,
    removeUserFromGroup,
    updateGroup
} from '../groups/groups.repo'

export const getAllGroupsData = state => state.groupsReducer.allgroupsdata;
export const getState = state => state;

export function* groupsSagas () {
    yield takeEvery(GET_ALL_GROUPS_REQUEST, function* (action) {


        try {

            const res = yield call(fetchAllGroups,action.payload);
            yield put({type: GET_ALL_GROUPS_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_GROUPS_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(CREATE_GROUP_REQUEST, function*(action){
        // put({type: CLEAR_GROUP_REQUEST, payload: undefined});


        try {
            const res = yield call(createGroup, action.payload);
            yield put({type: CREATE_GROUP_SUCCESS, payload: res});
            yield put({type: GET_ALL_GROUPS_REQUEST, payload: {page: 0, size: 10000}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: CREATE_GROUP_FAIL, payload: {message: e.message}});
        }
    });
    yield takeEvery(DELETE_GROUP_REQUEST, function*(action){
        put({type: CLEAR_GROUP_REQUEST, payload: undefined});


        try {
            const res = yield call(deleteGroup, action.payload);
            yield put({type: DELETE_GROUP_SUCCESS, payload: res});
            yield put({type: GET_ALL_GROUPS_REQUEST, payload: {page: 0, size: 10000}});

        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: DELETE_GROUP_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(GET_GROUP_REQUEST, function*(action){
        put({type: CLEAR_GROUP_REQUEST, payload: undefined});


        try {
            const res = yield call(fetchGroup,action.payload);
            yield put({type: GET_GROUP_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_GROUP_FAIL, payload: {message: e.message}});
        }

    });
    yield takeEvery(UPDATE_GROUP_REQUEST, function*(action){
        put({type: CLEAR_GROUP_REQUEST, payload: undefined});


        try {
            const res = yield call(updateGroup, action.payload);
            yield put({type: UPDATE_GROUP_SUCCESS, payload: res});
            yield put({type: GET_ALL_GROUPS_REQUEST, payload: {page: 0, size: 10000}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: UPDATE_GROUP_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(GET_ALL_USERS_BY_GROUP_REQUEST, function*(action){


        try {
            const res = yield call(fetchAllUsersByGroup, action.payload);
            yield put({type: GET_ALL_USERS_BY_GROUP_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_USERS_BY_GROUP_FAIL, payload: {message: e.message}});
        }
    });

    //add user to group
    yield takeEvery(ADD_USER_TO_GROUP_REQUEST, function* (action) {

        try {
            const res = yield call(addUserToGroup,action.payload);
            yield put({type: ADD_USER_TO_GROUP_SUCCESS, payload: res});
            yield put({type: GET_ALL_USERS_BY_GROUP_REQUEST, payload: {id: action.payload.group.id}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: ADD_USER_TO_GROUP_FAIL, payload: {message: e.message}});
        }
    });

    //remove user from group
    yield takeEvery(REMOVE_USER_FROM_GROUP_REQUEST, function* (action) {
        try {
            const res = yield call(removeUserFromGroup,action.payload);
            yield put({type: REMOVE_USER_FROM_GROUP_SUCCESS, payload: res});
            yield put({type: GET_ALL_USERS_BY_GROUP_REQUEST, payload: {id: action.payload.group.id}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: REMOVE_USER_FROM_GROUP_FAIL, payload: {message: e.message}});
        }
});



}

