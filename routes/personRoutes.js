const express = require('express');
const router = express.Router()
const Person = require("../model/person");

// persone
router.post("/", async (req, res) => {
    try {
      // get the data from body
      const data = req.body;
      // create a new doucment type person
      const newPerson = new Person(data);
  
      // save the new perosn data into database (its a asyn so it take time)
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      const alldata = await Person.find();
      console.log("data feteched");
      res.status(200).json(alldata);
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: "internal error" });
    }
  });

  // query paramereters
router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == "chef" || workType == "manager" || workType == "waiter") {
        const response = await Person.find({ work: workType });
        console.log("responsed fetechd");
        res.status(200).json(response);
      } else {
        res.send(404).json({ error: "invalid work type" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  });

  router.put('/:id' ,async(req,res)=>{
    
    try {
      const perosnId  = req.params.id
      const updatedPersonData = req.body
        const response = await Person.findByIdAndUpdate(perosnId,updatedPersonData,{
          new:true,
          runValidators:true
        })
        console.log("data updated");
        res.status(200).json(response)

        if(!response){
            res.send(404).json({erroe:"perosn not found"})
        }


        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal error" });
        
    }

})

router.delete('/:id' ,async(req,res)=>{
  try {
    
    const perosnId = req.params.id
    const deletedPerson = await Person.findByIdAndDelete(perosnId)
    if(!deletedPerson){
      res.status(404).json({error:"perosn id not found"})

    }

    console.log("perosn data remove");
    res.status(200).json(deletedPerson)
  } catch (error) {
    console.log(error);
        res.status(500).json({ error: "internal server  error" });
  }
        
})
    



  module.exports = router