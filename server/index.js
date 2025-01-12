import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from './routes/book-route.js'
import userRoute from './routes/user-route.js'
import categoryRoute from './routes/category-route.js'
import contactRoute from './routes/contact-route.js'
import cors from 'cors'
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.MONGOURI

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use('/book', bookRoute)
app.use("/user", userRoute);
app.use("/", categoryRoute);
app.use("/", contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})