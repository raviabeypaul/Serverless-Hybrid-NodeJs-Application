import express, { Application } from "express";
import bodyParser from "body-parser";

import { routes } from "./Routes/routes";

export const createServer = (): Application => {
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  routes(app);
  return app;
};
