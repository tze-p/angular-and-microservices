import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import * as http from "http";
import cors from "cors";
import dotenv from 'dotenv';
import { RouteConfig } from "./Common/common.route.config";
import { UserRoutes } from "./global/User/user.route.config";
import { AuthRoutes } from "./Authentication/authentication.route.config";

const routes: Array<RouteConfig> = [];

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

routes.push(new UserRoutes(app));
routes.push(new AuthRoutes(app));
// routes.push(new AttachedDocumentTypeRoutes(app));

const server: http.Server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);

  routes.forEach((route: RouteConfig) => {
    console.log(`Routes configured for ${route.getName()}`);
  });
});

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server!');
});


