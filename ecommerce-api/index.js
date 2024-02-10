const express = require ('express');
const mongoose = require ('mongoose');
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const userRoute  = require("./routes/user");
const authRoute  = require("./routes/auth");
const productRoute  = require("./routes/product");
const cartRoute  = require("./routes/cart");
const orderRoute  = require("./routes/order");

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(err);
});
 
app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/user" , userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.listen(process.env.PORT || 3001, () =>{
    console.log('Server on port 3001');
})