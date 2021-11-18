export class User {
    id;
    firstName;
    lastName;
    displayName;
    url;
    email;
    pictureUrl;

    constructor(obj){
        Object.assign(this, obj);
    }

}