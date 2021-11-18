import axios from 'axios';
import { getServerApiURL } from '../shared/app.properties';

const SERVER_API_URL=getServerApiURL();

export function saveUserAsStudent(information)
{
    return axios.post(SERVER_API_URL+`/students/register_new`,information);
}

export function getStudentByUsername(username){
    return axios.get(SERVER_API_URL+`/users/profile/?username=${username}`);
}

export function getSortedStudents(){
    return axios.get(SERVER_API_URL+`/students/sorted`);
}