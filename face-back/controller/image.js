const handleImage=(req,res,db)=>{
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .then(function() {return db.select('entries').from('users').where('id','=',req.body.id);})
    .then(entries => {
      res.json(entries[0]);
      //console.log(entries[0]);
   })
    .catch(err => res.status(400).json('unable to get entries'))
  }

  module.exports={
      handleImage:handleImage
  };