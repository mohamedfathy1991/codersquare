export interface User{
    id:string,
    username:string,
    name:string,
    email:string,
    password:string,




}
export interface Posts{
    id:string,
    title:string,
    url:string,
   
    userid:string,
    postAt:number,

}

export interface Comment{
    id:string,
    userid:string,
    postid:string,

    comment:string,
    commentAt:number,

}

export interface Like{
   
    userid:string,
    postid:string,

}