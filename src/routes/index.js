const express=require('express');
const app=express();
const converter = require('json-2-csv');
const commands=require('../util/commonSQL.js');
const profile=require('../usecases/user_profile.js');
const nodemailer = require('nodemailer');
const https = require('https')
var host = 'https://hiramailer.herokuapp.com/em';


const cores =require('cors')

const path = require('path');
const { registaerPurchase } = require('../usecases/product-purchase.js');

app.use(
    express.urlencoded({
      extended: true
    })
  )
  //app.use(cores())
  //app.options('*',cores())
  
  
  app.use(express.json())
  app.use('/', express.static(path.join(__dirname, 'public')))

  app.get('/test',(req,res)=>{
      res.send("the page is working")
  })


  


// app.get('/retailer',(req,res)=>{
//     commands.selectAll(res,'Retailer');  
    
// })
// app.get('/customer',(req,res)=>{ 
//     commands.selectAll(res,'Customer');  
// })

// app.get('/category',(req,res)=>{
//     commands.selectAll(res,'Category');  
// })
// app.get('/product',(req,res)=>{

//     commands.selectAll(res,'Product');   
// })
// app.get('/purchase',(req,res)=>{
//     commands.selectAll(res,'Purchases');    
// })
// app.get('/sells',(req,res)=>{
//     commands.selectAll(res,'Selles');    
// })
// app.get('/store',(req,res)=>{
//     commands.selectAll(res,'Store');  
    
// })
// app.get('/vendor',(req,res)=>{
//     commands.selectAll(res,'Vendor');  
// })

// //Registration units
// app.post('/confirm_email',(req,res)=>{
//     profile.changePasswordConf(req,res);
// })

// app.post('/chp',(req,res)=>{
//     profile.changePassword(req,res);
// })
// app.post('/login',(req,res)=>{

//     profile.login(req,res);
// })
// app.post('/signup',(req,res)=>{
//   let command=profile.signUp(req.body,res);
 
// })
// app.post('/update_retailer',(req,res)=>{
//    // profile.changePassword(res,req.body.userName,req.body.password);
//     profile.updateRetailer(res,req);
// })

// app.post('/reg',(req,res)=>{
//     commands.generateInsertSql(req.body.data,req.body.tableName,res) 
// })

// ///Quary String Test
// app.get('/combo',(req,res)=>{
//     commands.getComboData(req.query,res)
// })

// //===================================purchase registration========================

// const purchase =require('./op/product-purchase')
// app.post('/purchase',(req,res)=>{
//      console.log(req.body)
//     // res.send("tets")
//    purchase.registerPurchase(req,res)
// })
// app.post('/purchase_order_number',(req,res)=>{
//     purchase.getPurchaseOrderNumber(req,res)
// })
// app.post('/close_order_number',(req,res)=>{
//     purchase.closeOrderNumber(req,res)
// })
// app.post('/vendor_detail',(req,res)=>{
//     purchase.getVendorDetail(req,res)

// })
// const sells = require('./op/product-sells')

// app.post('/sells_order_number',(req,res)=>{
//     sells.getSellsOrderNumber(req,res)
// })
// app.post('/new_sells',(req,res)=>{
//     console.log(req.body)
// })


app.listen(3000)