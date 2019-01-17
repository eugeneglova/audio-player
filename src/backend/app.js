import express from "express";

import library from "./routes/library";

const app = express();

app.use("/api", library);

app.use("*", (req, res) => {
  const err = `Unknown path ${req.protocol}://${req.get("host")}${
    req.originalUrl
  }`;
  console.log(err);
  res.send(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.json(err);
});

export default app;
