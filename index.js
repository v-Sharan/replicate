import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import path from "path";
import uploadRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use("/uploads", express.static(path.join("uploads")));

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, () => {
      console.log(err);
    });
  }
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
