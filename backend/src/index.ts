import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from "path";

mongoose.connect(process.env.MONGODB_URL as string);

const app = express();
app.use(cookieParser());
// convert the body of api req to json
app.use(express.json());
// parse the url and get params like that
app.use(express.urlencoded({ extended: true }));
// security prevents requests from certain urls
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// serve those compiled frontend static assets in /dist folder, same as we can serve api requests we can serve static assets
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
