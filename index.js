const express = require("express"); 


var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rsanghvi2712:wk9XDa3M8Oqnuyz0@cluster0.owsw8yh.mongodb.net/")
.then(() => {
  console.log('connected to mongodb')
  app.listen(8000,function check(error){
    if(error){
        console.log("error")
    }
    else{
        console.log("The Example API is Started")
    }
})
}).catch((error) =>{
  console.log(error)

});

const User = require('./models/userModel');
const app = express();
app.use(express.json()) 


async  function Adduser(){
const user = await User.create({
  firstname:'ruchi',
  lastname:'sanghvi'
})
}

Adduser();

