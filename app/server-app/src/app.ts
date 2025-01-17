import express, { Request, Response } from "express";

const app = express();

app.get("/status", (req: Request, res: Response) => {
  res.status(200).send({ status: "Connection OK" });
});

export default app;
