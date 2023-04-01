const fs=require("fs")
const express=require("express")
const app=express();
// const data=fs.writeFile("./test.text",'this is test file',{encoding:"utf-8"},(err)=>{
//     if(err){
//         console.log("something went wrong")
//         console.log(err)
//     }
//     else{
//         console.log("go to file now")
//     }
// })
// console.log(data)

app.get("/get",(req,res)=>{
    res.send("this is homepage")
})
app.listen(500,()=>{
    console.log("listening on port 5000")
})