import { RouteConfig } from "../../Common/common.route.config";
import express, { Application, Request, Response } from "express";
import * as AttachedDocumentTypeController from "./AttachedDocumentType.controller";
import JWT from "../../Common/authentication.validate"

export class AttachedDocumentTypeRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "AttachedDocumentTypeRoutes");
  }

  configureRoutes() {
    // this.app.route(`/api/static/AttachedDocumentType`).get(
    //   [JWT.authenticateJWT,
    //    AttachedDocumentTypeController.browseAttachedDocumentType
    //   ]
    //   );
      this.app.route(`/api/static/AttachedDocumentType`).get(
        [
        JWT.authenticateJWT,
         AttachedDocumentTypeController.browseAttachedDocumentType
        ]
        );
  
    return this.app;
  }
}