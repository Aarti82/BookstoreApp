import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"
import bookRoute from "./route/book.route.js"


dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5174" }));

app.use(express.json());

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});


app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
