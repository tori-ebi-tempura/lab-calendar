import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import { LogInDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(logInDto: LogInDto) {
    const user = await this.usersService.findOneByName(logInDto.userName);
    if (user?.password !== logInDto.password) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      userName: user.userName,
      studentNumber: user.studentNumber,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
