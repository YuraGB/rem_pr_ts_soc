// @ts-ignore
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import compression from "compression";
import morgan from "morgan";
import {socketHandlers} from "./socketHandlers/onHandlers.js";


const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  transports: ["polling"],
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

io.on("connection", socketHandlers(io) );

app.use(compression());

// You may want to be more aggressive with this caching
app.use(express.static("public", { maxAge: "1h" }));

// Remix fingerprints its assets so we can cache forever
app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

app.use(morgan("tiny"));
// app.all(
//   "*",
//   MODE === "production"
//     ? createRequestHandler({ build: import("./build/index.mjs") })
//     : (req, res, next) => {
//         const build = import("./build/index.mjs");
//         return createRequestHandler({ build, mode: MODE })(req, res, next);
//       }
// );

const port = process.env.PORT || 8080;

httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
