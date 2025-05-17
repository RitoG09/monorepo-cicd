import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await prismaClient.users.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json({
    message: "signup successfull!",
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log("server listening on the port 3002");
});
