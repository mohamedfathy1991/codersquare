
import { Comment } from "../types"
export interface CommentDaw{
creatcomment(comment:Comment):void
listcomment(postid:String):Comment[]
deletComment(id:String):void


}