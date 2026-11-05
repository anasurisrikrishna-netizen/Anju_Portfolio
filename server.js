import express from "express";
import backend from "./backend/server.js";
import { fileURLToPath } from "node:url";

const app = express();

app.get("/", (_request, response) => {
  response.sendFile(fileURLToPath(new URL("./index.html", import.meta.url)));
});

app.use(backend);

export default app;
