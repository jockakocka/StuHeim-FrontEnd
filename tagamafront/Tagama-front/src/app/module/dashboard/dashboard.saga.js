import {call, put, takeEvery} from 'redux-saga/effects';
import {
    CREATE_REPORT_REQUEST,
    CREATE_REPORT_SUCCESS,
    GET_APP_HEALTH_REQUEST,
    GET_APP_HEALTH_SUCCESS,
    GET_QUEUE_REPORT_REQUEST,
    GET_QUEUE_REPORT_SUCCESS
} from './dashboard.actions'
import {getAppHealth} from './dashboard.repo';

export function* dashboardSagas() {

    yield takeEvery(GET_APP_HEALTH_REQUEST, function* (action) {
        try {
            const res = yield call(getAppHealth, action.payload);
            yield put({type: GET_APP_HEALTH_SUCCESS, payload: res});
        } catch (e) {
        }
    });
}