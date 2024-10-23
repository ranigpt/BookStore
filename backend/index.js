const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv');
const  mongoose = require('mongoose');
const bookRoute = require('./route/book.route');
const userroute = require('./route/user.route');
const cors = require('cors');

app.use(cors());
app.use(express.json());
dotenv.config();

const URI = process.env.MONGOURL;
console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});



app.get('/',(req,res)=>{
    res.send("hello");
})


app.use("/book",bookRoute);


app.use("/user",userroute);
app.listen(port,()=>{
    console.log(`listing at port number ${port}`)
})