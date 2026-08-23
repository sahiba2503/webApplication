const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let todos=[
    {
        name:"Task name",
        id:1,
        description:"example"
    }
]

app.get("/gettodo",(req,res)=>{
      res.json(todos);
});

app.post("/posttodo",(req,res)=>{
    let task={
        name:req.body.name,
        id:todos.length + 1,
        description:req.body.description
            }
            todos.push(task);
            res.json(todos);
});



app.listen(5000,()=>{
    console.log("server is running on 3000");
})