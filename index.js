const express = require('express');
const app = express();  
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')
const methodOverride = require('method-override');
const baseurl = "https://e-commerce-phase01.onrender.com";

mongoose.connect('mongodb://127.0.0.1:27017/BigProject')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("error is:", err)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))    // Static files

app.use(express.urlencoded({extended:true})) 
app.use(methodOverride('_method'))

app.use(productRoutes);
app.use(reviewRoutes);

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})

// Step 01 - Basic server
// Step 02 - mangoose connection
// Step 03 - Model -> seed data
// Step 04 - Routes -> views
// Step 05 - rating Schema -> Product change -> Form to add rating and comment -> show.ejs
