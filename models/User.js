class User{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static create(name){
        return{
            id: Date.now(),
            name
        }
    }
}

export default User;