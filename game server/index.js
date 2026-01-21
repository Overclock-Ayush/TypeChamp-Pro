const express = require("express");
const mongoDB = require("./db");
const cors = require("cors");

const app = express();
mongoDB();

// ✅ CORS FIRST
app.use(
  cors({
    origin: "https://typechamp-pro-frontend-rd7f.onrender.com",
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO server");
});

app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("app is listening on port " + port);
});




// const express = require("express");
// const mongoDB = require("./db");
// const cors=require('cors');
// const port=5000;
// mongoDB();
// const app=express();
// // app.use((req,res,next)=>{
// //     res.setHeader("Acess-Control-Allow-Origin","http://localhost:3000");
// //     res.header(
// //         "Access-Control-Allow-Headers",
// //         "Origin, X-Requested-With, Content-Type, Accept" 
// //     );
// //     next();
// // })
// app.get("/",(req,res)=>{
//     res.send("HELLO server");
// });

// app.use(cors());
// app.use(express.json());
// app.use("/api",require("./Routes/CreateUser"));
// app.use("/api",require("./Routes/DisplayData"));
// app.listen(port,()=>{
//     console.log("app is listening on port "+port);
// });
