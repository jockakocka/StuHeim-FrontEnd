import axios from 'axios';
import { getServerApiURL } from '../shared/app.properties';

const SERVER_API_URL=getServerApiURL();

export function getAllStudentDormitories(page,size){
    return axios.get(SERVER_API_URL+`/studentDormitories/all/?page=${page}&size=${size}`);
}

export function createRating(id, rating,username){
    return axios.post(SERVER_API_URL+`/ratings/create/${id}?username=${username}`, rating);
}