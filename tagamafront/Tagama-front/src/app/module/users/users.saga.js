import {call, put, select, takeEvery} from 'redux-saga/effects';
import {
    CLEAR_USER_REQUEST,
    CREATE_USER_FAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    RESET_PASSWORD_USER_REQUEST,
    RESET_PASSWORD_USER_SUCCESS,
    RESET_PASSWORD_USER_FAIL
} from "./users.actions";
import {createUser, deleteUser, fetchUser, fetchUsersFilteredByUsername, updateUser, resetPasswordUser} from "./users.repo";

export const getAllUsersData = state => state.usersReducer.allusersdata;
export const getState = state => state;


export function* usersSagas () {
    
    yield takeEvery(GET_ALL_USERS_REQUEST, function* (action) {
        try {
            const res = yield call(fetchUsersFilteredByUsername,action.payload);
            yield put({type: GET_ALL_USERS_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_ALL_USERS_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(GET_USER_REQUEST, function*(action){
        put({type: CLEAR_USER_REQUEST, payload: undefined});

        try {
            const res = yield call(fetchUser,action.payload);
            yield put({type: GET_USER_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: GET_USER_FAIL, payload: {message: e.message}});
        }

    });

    yield takeEvery(CREATE_USER_REQUEST, function*(action){
        put({type: CLEAR_USER_REQUEST, payload: undefined});

        try {
            const res = yield call(createUser, action.payload);
            yield put({type: CREATE_USER_SUCCESS, payload: res});
            yield put({type: GET_ALL_USERS_REQUEST, payload: {page: 0, size: 8, filter: ""}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: CREATE_USER_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(DELETE_USER_REQUEST, function*(action){
        put({type: CLEAR_USER_REQUEST, payload: undefined});

        try {
            const res = yield call(deleteUser, action.payload);
            yield put({type: DELETE_USER_SUCCESS, payload: res});
            let allusersdata = yield select(getAllUsersData);

            yield put({type: GET_ALL_USERS_REQUEST, payload: {page: 0, size: 8,filter: ""}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: DELETE_USER_FAIL, payload: {message: e.message}});
        }
    }); 

    yield takeEvery(UPDATE_USER_REQUEST, function*(action){
        put({type: CLEAR_USER_REQUEST, payload: undefined});


        try {
            const res = yield call(updateUser, action.payload);
            yield put({type: UPDATE_USER_SUCCESS, payload: res});
            let allusersdata = yield select(getAllUsersData);
            yield put({type: GET_ALL_USERS_REQUEST, payload: {page: 0, size: 8,filter: ""}});
        }
        catch (e) {
            console.error(e);
            //yield put(showNotification('error.error_nesto'));
            yield put({type: UPDATE_USER_FAIL, payload: {message: e.message}});
        }
    });

    yield takeEvery(RESET_PASSWORD_USER_REQUEST, function*(action){
        put({type: CLEAR_USER_REQUEST, payload: undefined});


        try {
            const res = yield call(resetPasswordUser, action.payload);
            yield put({type: RESET_PASSWORD_USER_SUCCESS, payload: res});
        }
        catch (e) {
            console.error(e);
            yield put({type: RESET_PASSWORD_USER_FAIL, payload: {message: e.message}});
        }
    });
}
