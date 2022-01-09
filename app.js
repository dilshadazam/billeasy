import express from "express";
import os from "os";
import sequelize from "./utilities/database.js";
import helmet from "helmet";
import compression from "compression";

const port = process.env.PORT || 3300;

const app = express();
//all routes imported here

import administratorRoutes from "./routes/administrator-routes.js";

app.use("/administrator", administratorRoutes);

// app.use("/user", userRoutes);

app.use(helmet());
app.use(compression());

// sync with database
sequelize
  .sync()
  .then(() => {
    app.listen(port);
    console.log(`Listening on ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
