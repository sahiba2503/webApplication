const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let todos=[
    {
         id:1,
        name:"Task name",
        description:"example",
        isCompleted:"not",
    },
];

app.get("/gettodo",(req,res)=>{
      res.json(todos);
});

app.post("/posttodo",(req,res)=>{
    let task={
         id:todos.length + 1,
        name:req.body.name,
        description:req.body.description,
        isCompleted:req.body.isCompleted,
            }
            todos.push(task);
            res.json(todos);
});
app.patch("/taskCompleted",(req,res)=>{
    let id = Number(req.body.key);
     todos = todos.map((item)=>{
        if(item.id === id){
            return {...item, isCompleted:"yes"};
        }
        else{
            return item;
        }
    });
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
//
app.patch("/updatetodo", (req, res) => {

  const id = Number(req.body.key);

  const task = todos.find((item) => item.id === id);

  if (task) {
    task.name = req.body.name;
    task.description = req.body.description;
  }

  res.json(todos);
});



app.listen(5000,()=>{
    console.log("server is running on 3000");
})