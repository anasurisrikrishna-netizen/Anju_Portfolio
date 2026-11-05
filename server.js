import app from "./backend/server.js";
import { fileURLToPath } from "node:url";

app.get("/", (_request, response) => {
  response.sendFile(fileURLToPath(new URL("./index.html", import.meta.url)));
});

export default app;
