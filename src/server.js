import express from "express";
import { greet } from "./utils.js";

export const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Actions practice app!");
});

app.get("/greet/:name", (req, res) => {
  res.json({ message: greet(req.params.name) });
});

// Only start listening when run directly (not when imported by tests).
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}
