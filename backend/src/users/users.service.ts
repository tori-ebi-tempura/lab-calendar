import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // if (!(createUserDto instanceof CreateUserDto)) {
    //   throw new BadRequestException();
    // }
    if (
      await this.usersRepository.findOne({
        where: { userName: createUserDto?.userName },
      })
    ) {
      throw new ConflictException();
    }
    const user: User = await this.usersRepository.save(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
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
    });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
