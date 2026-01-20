const mongoose = require("mongoose");
const path = require("path");

// Load environment variables from .env in this folder
require("dotenv").config({
  path: path.join(__dirname, ".env"),
  quiet: true,
});

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected");

    // Existing logic (kept as your project expects)
    const fetched_data = mongoose.connection.db.collection("scores");
    const data = fetched_data.find({}).toArray();

    data.then((result) => {
      global.food_items = result;
    });

  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoDB;










// const mongoose = require("mongoose");
// const mongoURI="mongodb+srv://admin:test1234@cluster0.uvertd2.mongodb.net/gameDB";

// const mongoDB = async () => {
//   await mongoose.connect('mongodb://127.0.0.1:27017/gameDB',{useNewUrlParser:true}).then((res) => {
//     //if succeded do this block of code
//     console.log("connected");
//     const fetched_data=mongoose.connection.db.collection("food_items");
//     const data = fetched_data.find({}).toArray();
//     data.then(function(result) {
//       // console.log(result) // "Some User token"
//       // console.log(data);
//     global.food_items = result;
//    })
//    const fetched_category=mongoose.connection.db.collection("foodCategory");
//    const data2 = fetched_category.find({}).toArray();
//    data2.then(function(result) {
//      // console.log(result) // "Some User token"
//     //  console.log(data2);
//    global.foodCategory = result;
//   })
    
//   }).catch((err) => {
//     //catch error
//     console.log(err);
//   });

  
// };

// module.exports = mongoDB;

