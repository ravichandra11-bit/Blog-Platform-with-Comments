const router=require('express').Router();

router.post('/register',(req,res)=>{
 res.json({message:'Register API'});
});

router.post('/login',(req,res)=>{
 res.json({token:'sample-token'});
});

module.exports=router;
