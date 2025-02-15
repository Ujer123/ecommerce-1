// Import dependencies

const mongoose = require("mongoose");


const connectDb = async()=>{



// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("DB Connection Error:", err));

} 

module.exports= {connectDb}