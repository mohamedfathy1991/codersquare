import { Posts } from "../types"

export interface PostDaw{
 
    listPost():Posts[]
    creatpost(post:Posts):void
    getpost(id:string):Posts|undefined
    deletpost(id:string):void


}