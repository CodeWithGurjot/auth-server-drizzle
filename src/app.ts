import express, { Express } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import * as http from "http";
import log from "./utils/logger";
import router from "./routes";

//config
dotenv.config();
const app: Express = express();
const server: http.Server = http.createServer(app);

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(cookieParser());

//routes
app.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  log.info(`Server running on port ${PORT}`);
});
