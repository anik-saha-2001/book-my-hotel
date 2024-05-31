import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string);

const app = express();
// convert the body of api req to json
app.use(express.json());
// parse the url and get params like that
app.use(express.urlencoded({ extended: true }));
// security prevents requests from certain urls
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint!" });
});

app.listen(7000, () => {
  console.log(`Server is running on localhost:${7000}`);
});
