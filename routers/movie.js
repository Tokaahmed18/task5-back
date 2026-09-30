const express=require("express")
const Movie=require("../model/movie.js")
const router=express.Router()

router.post('/movie',async(req,res)=>{
    try{
        const movie=new Movie(req.body)
        await movie.save()
        res.status(200).send(movie)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/movie',async(req,res)=>{
    try{
        const movies=await Movie.find({})
        if(!movies){
            return res.status(404).send("not found movies")
        }
        res.status(200).send(movies)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/movie/:id',(req,res)=>{
    const _id=req.params.id
    const movies=Movie.findById(_id).then((movie)=>{
        if(!movie){
            return res.status(404).send("not found movies")
        }
        res.status(200).send(movie)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

router.patch('/movie/:id',(req,res)=>{
    const _id=req.params.id
    const movies=Movie.findByIdAndUpdate(_id,req.body,{
        new:true,
        runValidators:true
    }).then((movie)=>{
        if(!movie){
            return res.status(404).send("not found movies")
        }
        res.status(200).send(movie)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})

router.delete('/movie/:id',async(req,res)=>{
    try{
        const _id=req.params.id
        const movies=await Movie.findByIdAndDelete(_id)
        if(!movies){
            return res.status(404).send("not found movies")
        }
        res.status(200).send("succ delete")
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports=router