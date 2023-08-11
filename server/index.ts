import  express, { RequestHandler, response }  from "express"
import bodyParser from "body-parser"
import { db } from "./datasore";

const app = express()


app.use(bodyParser.json())
const posts: any = [];


app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


const requestloger:RequestHandler=(req,res,next)=>{//bult in function
    console.log(req.path,'--',req.method)
    console.log(req.body)
next()
    
}
app.use(requestloger)
app.get('/posts',(request,response)=>{
    response.send({posts:db.listPost()})
})




app.post('/posts',(request,response)=>{
    const post =request.body
    db.creatpost(post)
    response.sendStatus(200)

    
})




app.listen(4000,()=>{
    console.log('server')
})