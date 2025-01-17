import express, { Request, Response } from "express";
import axios from "axios";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  try {
    const expressServerUrl =
      process.env.EXPRESS_SERVER_URL || "http://localhost:9222";
    const response = await axios.get(`${expressServerUrl}/status`);
    res.send(`
            <html>
                <body>
                    <h1>Status: ${response.data.status}</h1>
                </body>
            </html>
        `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching status");
  }
});

export default app;
