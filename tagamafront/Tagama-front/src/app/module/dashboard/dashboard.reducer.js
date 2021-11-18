import {GET_APP_HEALTH_SUCCESS} from './dashboard.actions';

export function dashboardReducer(currentState = {reportHealth: -1}, action) {
    switch (action.type) {

        case GET_APP_HEALTH_SUCCESS:
            return {
                ...currentState,
                reportHealth: action.payload
            }

        default:
            return currentState;
    }
}