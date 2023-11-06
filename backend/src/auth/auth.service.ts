import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

export interface Payload {
  userName: string;
  sub: number;
  studentNumber: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByName(userName);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UpdateUserDto) {
    const payload = { userName: user.userName, sub: user.id, studentNumber: user.studentNumber };
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}