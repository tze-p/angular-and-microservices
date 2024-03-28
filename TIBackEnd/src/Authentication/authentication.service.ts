import * as UserService from "../global/User/user.service";

class AuthService {

  async findUserByUserName(username: string) {
    const user = await UserService.findUserByUserName(
        username);
    return user;

  }

}

export default new AuthService();