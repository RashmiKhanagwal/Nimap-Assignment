const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Set EJS as templating engine
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/Ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

app.get('/', (req, res)=>{
  res.render('home');
});

const productRoute = require("./routes/product");
app.use("/product", productRoute);

const categoryRoute = require("./routes/category");
app.use("/category", categoryRoute);

app.listen("3000", () => {
  console.log("server is running on port 3000");
});
