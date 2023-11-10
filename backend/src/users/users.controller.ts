import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Inject,
  forwardRef,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { KlassesObject } from "src/klasses/klasses.controller";
import { KlassesService } from "src/klasses/klasses.service";
import { UpdateKlassDto } from "src/klasses/dto/update-klass.dto";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

export interface UsersObject {
  users: User[];
}

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => KlassesService))
    private readonly klassesService: KlassesService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UsersObject> {
    const users: User[] = await this.usersService.findAll();
    return {
      users: users,
    };
  }

  @Get(":id")
  async findOneById(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return await this.usersService.findOneById(id);
  }

  @Get(":id/klasses")
  async findTakingKlasses(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<KlassesObject> {
    const klasses: UpdateKlassDto[] =
      await this.klassesService.findAllByUserId(id);
    return {
      klasses: klasses,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post(":id/klasses")
  async registerKlass(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: any,
  ): Promise<UpdateKlassDto> {
    return await this.klassesService.addUserInKlasses(id, body?.klassId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":userId/klasses/:klassId")
  async removeUserFromKlass(
    @Param("userId", ParseIntPipe) userId: number,
    @Param("klassId", ParseIntPipe) klassId: number,
  ): Promise<UpdateKlassDto> {
    return await this.klassesService.removeUserFromKlass(userId, klassId);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.usersService.remove(+id);
  // }
}
