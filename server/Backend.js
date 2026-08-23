const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let todos=[
    {
         id:1,
        name:"Task name",
        description:"example"
    },
];

app.get("/gettodo",(req,res)=>{
      res.json(todos);
});

app.post("/posttodo",(req,res)=>{
    let task={
         id:todos.length + 1,
        name:req.body.name,
        description:req.body.description
            }
            todos.push(task);
            res.json(todos);
});
app.delete("/deletetodo",(req,res)=>{
    todos = todos.filter((item)=>{
               if(item.id !== Number(req.body.key))
                {
                return item;
               }
    });
    
    res.json(todos);

})



app.listen(5000,()=>{
    console.log("server is running on 3000");
})