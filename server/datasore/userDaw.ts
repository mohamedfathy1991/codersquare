//DATA ACCES OBJECT

import { User } from "../types";


export interface UserDaw{

    creatUser(user:User):void 
    getuser(email:string):User|undefined
    deletuser(email:string):User|undefined


    

}

