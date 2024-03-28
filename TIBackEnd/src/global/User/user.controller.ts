import { Request, Response, NextFunction } from "express";
import * as UserService from "./user.service";

class UserController {
  constructor() {}

  async getUsers(req: any, res: Response, next: NextFunction) {

    const data = await UserService.findUsers();

    return res.status(200).json({
      success: true,
      data: data,
    });
  }
}

export default new UserController();