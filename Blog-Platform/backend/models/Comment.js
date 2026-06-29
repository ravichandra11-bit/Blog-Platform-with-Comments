const mongoose=require('mongoose');

module.exports=mongoose.model('Comment',
new mongoose.Schema({
postId:String,
userId:String,
comment:String,
date:{type:Date,default:Date.now}
}));
