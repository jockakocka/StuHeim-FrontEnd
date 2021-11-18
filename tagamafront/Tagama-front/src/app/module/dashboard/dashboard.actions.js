export const GET_APP_HEALTH_REQUEST = "GET_APP_HEALTH_REQUEST";
export const GET_APP_HEALTH_SUCCESS = "GET_APP_HEALTH_SUCCESS";
export const GET_APP_HEALTH_FAIL = "GET_APP_HEALTH_FAIL";


export function getAppHealth() {
    return {
        type: GET_APP_HEALTH_REQUEST,
        payload: {}
    }
}