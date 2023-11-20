import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { KlassesService } from "src/klasses/klasses.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => KlassesService))
    private readonly klassesService: KlassesService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    if (
      await this.usersRepository.findOne({
        where: { userName: createUserDto?.userName },
      })
    ) {
      throw new ConflictException();
    }
    try {
      return await this.usersRepository.save(createUserDto);
    } catch {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<User[]> {
    const users: User[] = await this.usersRepository.find();
    return users;
  }

  async findOneById(id: number): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: { userId: id },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async findOneByName(name: string): Promise<User> {
    return await this.usersRepository.findOne({
      where: { userName: name },
      select: ["userId", "userName", "studentNumber", "password"],
    });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  checkTypeOfCreateUserDto(obj: object): boolean {
    const comparisonCreateUserDto: CreateUserDto = new CreateUserDto();
    comparisonCreateUserDto.userName = "userName";
    comparisonCreateUserDto.studentNumber = "studentNumber";
    comparisonCreateUserDto.password = "password";

    for (const key in comparisonCreateUserDto) {
      if (obj[key] === undefined) {
        return false;
      }
    }
    return true;
  }
}
