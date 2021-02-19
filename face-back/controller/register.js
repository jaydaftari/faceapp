const handleRegister=(req,res,db,bcrypt,saltRounds)=>{
const { email, name, password } = req.body;
if(!email|| !name ||!password){
  return res.status(400).json('incorrect form submission');
}
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);
db.transaction(trx => {
  trx('login').insert({
    hash: hash,
    email: email
  })
 //.then(function(){return trx('login').select('email').orderBy('id','desc').limit(1);})
  .then((loginemail)=> {
    //console.log(email);
    //console.log(loginemail);
    return trx('users')
    .insert({
       name: name,
      email: req.body.email,
      joined: new Date()
    })
    .then(function(){return trx('users').select('*').orderBy('id','desc').limit(1);})
    .then(user=>{
      res.json(user[0]);
    })
    .then(trx.commit)
    .catch(trx.rollback)
  })
  .catch(err => res.status(400).json('unable to register'))
  })
}




module.exports={
    handleRegister:handleRegister
};