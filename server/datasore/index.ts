import { LikeDaw } from "./likeDaw";
import { PostDaw } from "./postDaw";
import { UserDaw } from "./userDaw";
import { CommentDaw } from "./commentDaw";
import { inmemorydb } from "./memorydb/inmemorydb";


export interface dataStore extends  UserDaw ,PostDaw ,LikeDaw,CommentDaw {}
export const db= new inmemorydb()
