import { Application, Request, Response } from "express";
import { RouteConfig } from "../Common/common.route.config";
import AuthController from "./authentication.controller";

export class AuthRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes() {
    this.app.route("/api/login").post(AuthController.login);

    return this.app;
  }
}