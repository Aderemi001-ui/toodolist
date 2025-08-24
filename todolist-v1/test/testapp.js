const express=require('express')
const bodyParser=require('body-parser')
var app=express()
let items=[]
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',function(req,res){
var day=''
var today=new Date()
options={
    weekday:'long',
    day:'numeric',
    month:'long'
}
var day=today.toLocaleDateString('en-Us',options)
res.render('testindex',{kindOfDay:day , newItems:items})
})
app.post('/',function(req,res){
  var item =req.body.itemInput 
  items.push(item) 
  res.redirect('/')
})
app.listen(3000,function(req,res){
    console.log('SERVER IS RUNNING ON PORT 3000!')
})