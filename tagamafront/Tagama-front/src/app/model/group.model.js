export class Group{
    id;
    url;
    name;
    type;

    constructor(obj){
        Object.assign(this, obj);
    }
}