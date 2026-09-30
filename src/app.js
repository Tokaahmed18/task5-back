const express=require("express")
const app=express()
const port=process.env.PORT||3000
require("../DB/mongoose.js")
app.use(express.json())
const movieRouter=require("../routers/movie.js")
app.use(movieRouter)
app.listen(port,()=>{
    console.log("api is runnning")
})
