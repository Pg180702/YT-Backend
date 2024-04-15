import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error while running", error);
      throw error;
    });
    app.listen(3000, () => {
      console.log(`server running at 3000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection fail", error);
  });

// import express from "express"
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.log("error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () =>{
//             console.log(`App listening on ${process.env.PORT} `)
//         })
//     } catch (error) {
//         console.error("Error", error)
//     }
// })()
