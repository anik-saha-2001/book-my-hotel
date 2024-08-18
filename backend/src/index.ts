import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelRoutes from "./routes/my-hotels";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

// connect to cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
app.use("/api/my-hotels", myHotelRoutes);

// catch all route -> to pass on any req that are not api endpoints and redirect to frontend and manage it by react-router-dom
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
