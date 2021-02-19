const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const knex = require('knex');
const register = require('./controller/register');
const signin=require('./controller/signin');
const profile=require('./controller/profile');
const image=require('./controller/image');

const db = knex({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'facepp'
  }
});

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {
  res.send(db.users);
})

app.post('/signin', (req, res) => {signin.handleSignin(req,res,db,bcrypt)}) 
app.post('/register', (req, res) => {register.handleRegister(req,res,db,bcrypt,saltRounds)})
 

      
app.get('/profile/:id', (req,res)=>{profile.handleProfile(req,res)})
app.put('/image', (req,res) =>{image.handleImage(req,res,db)})

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})