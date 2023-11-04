import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
    ){}

  async logIn(userName: string, pass: string) {
    const user = await this.usersService.findOneByName(userName);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      userName: user.userName,
      studentNumber: user.studentNumber
    }
    return {
      access_token: await this.jwtService.signAsync(payload)
    }

  }
}