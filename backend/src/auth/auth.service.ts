import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import * as bcrypt from "bcrypt";
import { User } from "src/users/entities/user.entity";

export interface Payload {
  userName: string;
  sub: number;
  studentNumber: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user: User = await this.usersService.findOneByName(userName);
    const isMatch: boolean = await bcrypt.compare(pass, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      password; //lint回避のために記述
      return result;
    }
    return null;
  }

  async login(user: UpdateUserDto) {
    const payload = {
      userName: user.userName,
      sub: user.userId,
      studentNumber: user.studentNumber,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
