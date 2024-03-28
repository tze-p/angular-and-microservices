import { NextFunction, Request, Response } from "express";
import AuthService from "./authentication.service";
import jwt from "jsonwebtoken";
import debug, { IDebugger } from "debug";
//import { Password } from "../Common/services/password";
const jwtSecret: string = process.env.JWT_SECRET || "123456";
const tokenExpirationInSeconds = 36000;

const log: IDebugger = debug("auth:controller");

class AuthController {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      console.log('username: ' + username);
      console.log('password: ' + password);

      const user = await AuthService.findUserByUserName(username);
      log("user", user);
      if (user) {

        // implement password checking
        // const isPasswordMatch = await Password.compare(user.password, password);
        const isPasswordMatch = true;

        if (isPasswordMatch != true) {
            return res.status(404).json({
              success: false,
              message: "Invalid Password"
            });
        } else {
            log("jwt Secret", jwtSecret);
            const token = jwt.sign(req.body, jwtSecret, {
              expiresIn: tokenExpirationInSeconds,
            });
            return res.status(200).json({
              success: true,
              data: user,
              id_token: token,
              expiresIn: tokenExpirationInSeconds
            });
        }
      } else {
        log("User Not Found");
        console.log("user not found");
        return res.status(404).json({
          success: false,
          message: "No user found"
        });
      }
    } catch (e) {
      next(e);
    }
  }

}

export default new AuthController();