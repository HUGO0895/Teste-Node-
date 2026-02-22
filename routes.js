const express=require('express')
const route=express.Router();
const homeControler=require('./src/controllers/homecontroler.js')
const contatoControler=require('./src/controllers/contatoControler.js')

route.get('/',(req,res,next)=>{console.log('09'); next()},homeControler.home); // essa arrow function é um midleware
route.post('/',homeControler.homepost);
route.get('/contato',contatoControler.contato)



module.exports=route;