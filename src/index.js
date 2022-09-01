const express=require('express');
const app=express();
const nodemailer = require('nodemailer');
const https = require('https')
const commands=require('./util/select_query.js');
var host = 'https://hiramailer.herokuapp.com/em';
const cores =require('cors')

app.use(cores())
app.options('*',cores())

const path = require('path')
app.use('/static', express.static(path.join(__dirname, '../public')))
app.use(
    express.urlencoded({
      extended: true
    })
  )
  app.use(express.json())



  app.get('/test',(req,res)=>{
      res.send("the page is working")
  })

app.get('/auditor',(req,res)=>{
    commands.getAll(res,'internalAuditor','auditor');   
})

  app.get('/service2',(req,res,next)=>{
    res.send(docuemnt)

  })
      
  app.get('/document',(req,res,next)=>{
  
  res.send(docuemnt)
})

app.listen(5000)