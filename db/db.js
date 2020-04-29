const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true})

mongoose.Promise = global.Promise

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("Database has been created! duuuh")
})


let userSchema = mongoose.Schema({
    userName: String, 
    userEmail: String,
    userPassword: String, 
    street1: String, 
    street2: String, 
    city: String, 
    state: String,
    zip: Number,
    phone: Number, 
    cardNumber: Number,
    expirationDate: Number, 
    ccv: Number, 
    billingCode: Number
});

let User = mongoose.model('User', userSchema);

let save = (user) => {
  return new Promise((resolve,reject)=>{
    var data = new User(user)
    data.save((err,res)=>{
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    });
  })
 
}

module.exports.save = save;