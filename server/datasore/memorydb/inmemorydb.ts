import { User, Posts, Like, Comment } from "../../types";
import { dataStore } from "../index";




export class inmemorydb implements dataStore {


    private users:User[]=[]
    private comments:Comment[]=[]
    private Posts:Posts[]=[]
     private likes: Like[]=[]
    creatUser(user: User): void {
        this.users.push(user)
    }
    getuser(email: string): User | undefined {
       return this.users.find(x=>x.email==email)
    }
    deletuser(email: string): User | undefined {
        throw new Error("Method not implemented.");
    }
    listPost(): Posts[] {
        return this.Posts
    }
    creatpost(post: Posts): void {

        this.Posts.push(post)
    }
    getpost(id: string): Posts | undefined {
         return this.Posts.find(x=>x.id==id) ;
    }
    deletpost(id: string): void {
      const index= this.Posts.findIndex(x=>x.id==id)
      if(index==-1){
        return
      }
      this.Posts.splice(index,1)
    }
    creatLike(like: Like): void {
        this.likes.push(like)
    }
    creatcomment(comment: Comment): void {
        this.comments.push(comment)
    }
    listcomment(postid: String): Comment[] {
        return this.comments
    }
    deletComment(id: String): void {
        const index= this.comments.findIndex(x=>x.id==id)
      if(index==-1){
        return
      }
      this.comments.splice(index,1)


    }
}