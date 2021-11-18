import {dispatchAction} from './../../index';
import axios from 'axios';


export const SERVER_API_URL = "http://localhost:8080";        //local npm
//export const SERVER_API_URL ="http://10.20.200.200:8855"   // put server IP here                  


export function getServerApiURL() {
    return SERVER_API_URL;
}

export function getCurrentAccessToken(){
    var idm = JSON.parse(localStorage.getItem('idm'));
    if (idm != null) {
        return idm.access_token;
    }
    dispatchAction({type: "USER_LOGOUT", payload: undefined});
    return null;
}

export function getAuthorizationHeader(){
    return "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0";
}


export function hasAnyRole(roles) {
    var role = roles.split(",")
    var currentRoles = localStorage.getItem('me') && JSON.parse(localStorage.getItem('me')).authorities;

    var hasRole = false;
    if (currentRoles != null) {
        for (var i = 0; i < role.length; i++) {

            for (var j = 0; j < currentRoles.length; j++) {
                if (role[i] == currentRoles[j].authority) {
                    hasRole = true;
                }
            }
        }
    }
    return hasRole;
}

export function hasRole(roles) {
    var role = roles.split(",")
    var currentRoles = localStorage.getItem('me') && JSON.parse(localStorage.getItem('me')).authorities;

    var hasRole = false;
    if (currentRoles != null) {
        for (var i = 0; i < role.length; i++) {

            for (var j = 0; j < currentRoles.length; j++) {
                if (role[i] == currentRoles[j].authority) {
                    hasRole = true;
                }
            }

            if (hasRole == false) {
                return false;
            }
            if (i != role.length - 1) {
                hasRole = false;
            }
        }
    }
    return hasRole;
}

export function handleLogout() {
    dispatchAction({type: "USER_LOGOUT", payload: undefined});
    localStorage.removeItem('idm');
    localStorage.removeItem('me');
    window.location = '/login';
    return true;
}

export function refreshToken() {
    let access_token;
    let username;
    if (localStorage.getItem('idm')) {
        access_token = JSON.parse(localStorage.getItem('idm')).refresh_token;
        username = JSON.parse(localStorage.getItem('idm')).username;

    } else {
        handleLogout();
    }
    axios({
        url: SERVER_API_URL + '/oauth/token?refresh_token='
            + JSON.parse(localStorage.getItem('idm')).refresh_token
            + '&grant_type=refresh_token',
        method: 'POST',
        headers: {
            'Authorization': getAuthorizationHeader()
        }
    }).then(res => {
        var expires_at_date = new Date();
        // expires_at_date.setSeconds(expires_at_date.getSeconds() + res.data.expires_in);
        expires_at_date = new Date(expires_at_date.getTime() + res.data.expires_in * 1000);
        res.data.expires_at = expires_at_date;
        res.data.username = username;
        localStorage.setItem('idm', JSON.stringify(res.data));
        return true;
    }).catch(err => {
        handleLogout();
    })
}
