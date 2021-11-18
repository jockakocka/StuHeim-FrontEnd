import {call, put, takeEvery} from 'redux-saga/effects';
import {
    ADD_GROUP_PRIVILEGE_FAIL,
    ADD_GROUP_PRIVILEGE_REQUEST,
    ADD_GROUP_PRIVILEGE_SUCCESS,
    ADD_USER_PRIVILEGE_FAIL,
    ADD_USER_PRIVILEGE_REQUEST,
    ADD_USER_PRIVILEGE_SUCCESS,
    GET_ALL_GROUPS_BY_PRIVILEGE_FAIL,
    GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST,
    GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS,
    GET_ALL_PRIVILEGES_FAIL,
    GET_ALL_PRIVILEGES_REQUEST,
    GET_ALL_PRIVILEGES_SUCCESS,
    GET_ALL_USERS_BY_PRIVILEGE_FAIL,
    GET_ALL_USERS_BY_PRIVILEGE_REQUEST,
    GET_ALL_USERS_BY_PRIVILEGE_SUCCESS,
    GET_GROUPS_FILTERED_BY_NAME_REQUEST,
    GET_GROUPS_FILTERED_BY_NAME_SUCCESS,
    GET_USERS_FILTERED_BY_NAME_REQUEST,
    GET_USERS_FILTERED_BY_NAME_SUCCESS,
    REMOVE_GROUP_PRIVILEGE_FAIL,
    REMOVE_GROUP_PRIVILEGE_REQUEST,
    REMOVE_GROUP_PRIVILEGE_SUCCESS,
    REMOVE_USER_PRIVILEGE_FAIL,
    REMOVE_USER_PRIVILEGE_REQUEST,
    REMOVE_USER_PRIVILEGE_SUCCESS
} from './privileges.actions';
import {
    addPrivilegeToGroup,
    addPrivilegeToUser,
    fetchAllGroupsByPrivilege,
    fetchAllPrivileges,
    fetchAllUsersByPrivilege,
    removePrivilegeFromGroup,
    removePrivilegeFromUser
} from './privileges.repo';
import {fetchUsersFilteredByUsername} from '../users/users.repo';
import {fetchGroupsFilteredByName} from '../groups/groups.repo';

export function* privilegesSagas () {
    
    yield takeEvery(GET_ALL_PRIVILEGES_REQUEST, function* (action) {
        try {
            const res = yield call(fetchAllPrivileges,action.payload);
            yield put({type: GET_ALL_PRIVILEGES_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_PRIVILEGES_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(GET_ALL_USERS_BY_PRIVILEGE_REQUEST, function* (action) {
        try {
            const res = yield call(fetchAllUsersByPrivilege,action.payload);
            yield put({type: GET_ALL_USERS_BY_PRIVILEGE_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_USERS_BY_PRIVILEGE_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST, function* (action) {
        try {
            const res = yield call(fetchAllGroupsByPrivilege,action.payload);
            yield put({type: GET_ALL_GROUPS_BY_PRIVILEGE_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_GROUPS_BY_PRIVILEGE_FAIL, payload: {message: e.message}});
        }
    });

    //add privilege to user
    yield takeEvery(ADD_USER_PRIVILEGE_REQUEST, function* (action) {

        try {
            const res = yield call(addPrivilegeToUser,action.payload);
            yield put({type: ADD_USER_PRIVILEGE_SUCCESS, payload: res});
            yield put({type: GET_ALL_USERS_BY_PRIVILEGE_REQUEST, payload: {id: action.payload.privilege.id}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: ADD_USER_PRIVILEGE_FAIL, payload: {message: e.message}});
        }
    });

    //remove privilege from user
    yield takeEvery(REMOVE_USER_PRIVILEGE_REQUEST, function* (action) {
            try {


                const res = yield call(removePrivilegeFromUser,action.payload);
                yield put({type: REMOVE_USER_PRIVILEGE_SUCCESS, payload: res});
                yield put({type: GET_ALL_USERS_BY_PRIVILEGE_REQUEST, payload: action.payload.privilege});
            }
            catch (e) {
                console.error(e);
                //yield put(showNotification('error.error_nesto'));
                yield put({type: REMOVE_USER_PRIVILEGE_FAIL, payload: {message: e.message}});
            }
    });

    //add privilege to group
    yield takeEvery(ADD_GROUP_PRIVILEGE_REQUEST, function* (action) {

        try {
            const res = yield call(addPrivilegeToGroup,action.payload);
            yield put({type: ADD_GROUP_PRIVILEGE_SUCCESS, payload: res});
            yield put({type: GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST, payload: {id: action.payload.privilege.id}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: ADD_GROUP_PRIVILEGE_FAIL, payload: {message: e.message}});
        }
    });


        //remove privilege from group
    yield takeEvery(REMOVE_GROUP_PRIVILEGE_REQUEST, function* (action) {
            try {


                const res = yield call(removePrivilegeFromGroup,action.payload);
                yield put({type: REMOVE_GROUP_PRIVILEGE_SUCCESS, payload: res});
                yield put({type: GET_ALL_GROUPS_BY_PRIVILEGE_REQUEST, payload: action.payload.privilege});
            }
            catch (e) {
                console.error(e);
                //yield put(showNotification('error.error_nesto'));
                yield put({type: REMOVE_GROUP_PRIVILEGE_FAIL, payload: {message: e.message}});
            }
    });


    //get users filtered
    yield takeEvery(GET_USERS_FILTERED_BY_NAME_REQUEST, function* (action) {

        try {
                const res = yield call(fetchUsersFilteredByUsername,action.payload);
                yield put({type: GET_USERS_FILTERED_BY_NAME_SUCCESS, payload: res});
            }
            catch (e) {
                console.error(e);
                //yield put(showNotification('error.error_nesto'));
            }
    });

    //get groups filtered
    yield takeEvery(GET_GROUPS_FILTERED_BY_NAME_REQUEST, function* (action) {
                try {
                    const res = yield call(fetchGroupsFilteredByName,action.payload);
                    yield put({type: GET_GROUPS_FILTERED_BY_NAME_SUCCESS, payload: res});
                }
                catch (e) {
                    console.error(e);
                    //yield put(showNotification('error.error_nesto'));
                }
    });
}