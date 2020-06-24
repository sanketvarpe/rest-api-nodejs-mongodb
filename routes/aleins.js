const express = require('express')
const Alien = require('../model/alein')
const router = express.Router()

router.get('/',async(req,res) => {
    //console.log("get request")
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err)
    {
        res.send("error"+err)
    }
   
})


router.get('/:id',async(req,res) => {
    //console.log("get request")
    try{
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
    }
    catch(err)
    {
        res.send("error"+err)
    }
   
})

router.post('/',async(req,res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try {
      const a1 =  await alien.save()
      res.json(a1)
    } catch (error) {
        res.send("error"+error)
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const al = await Alien.findById(req.params.id)
        al.sub=req.body.sub
        const a1 =await al.save()
        res.json(al)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const al = await Alien.remove({_id:req.params.id})
        
    } catch (error) {
        res.send(error)
    }
})
module.exports = router