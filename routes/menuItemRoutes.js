const express = require("express");
const router = express.Router();

const menuItem = require("../model/menuItem");


// menu item

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenuItem = new menuItem(data);

    const response = await newMenuItem.save();
    console.log("menu data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const allMenuData = await menuItem.find();
    console.log("menu data saved");
    res.status(200).json(allMenuData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});
router.get("/:testType", async (req, res) => {
  try {
    const testType = req.params.testType;
    if (testType == "Sweet" || testType == "Spicy" || testType == "Sour") {
      const response = await menuItem.find({ taste: testType });
      console.log("feteching menu");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid test type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
  }
});


router.put('/:id', async(req,res)=>{

  try {
    const  menuId = req.params.id
    const newMenuItemData = req.body
    
    const response = await menuItem.findByIdAndUpdate(menuId,newMenuItemData,{
      new:true,
      runValidators:true
    })

    if(!response){
      res.status(404).json({error:"menu not found"})
    }

    console.log("new menu data saved");
    res.status(200).json(response)
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
    
  }

})
router.delete('/:id', async(req,res)=>{
  try {
    
    const  menuId = req.params.id
    const deletedMenuItem = await menuItem.findByIdAndDelete(menuId)
    if(!deletedMenuItem){
      res.status(404).json({error:"menu id not found"})

    }

    console.log("menu data remove");
    res.status(200).json(deletedMenuItem)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal error" });
    
  }


})






module.exports = router;
