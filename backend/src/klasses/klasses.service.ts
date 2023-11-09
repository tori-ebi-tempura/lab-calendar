import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from "@nestjs/common";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Klass } from "./entities/klass.entity";
import { Repository } from "typeorm";
import { RoomsService } from "src/rooms/rooms.service";
import { Room } from "src/rooms/entities/room.entity";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class KlassesService {
  constructor(
    @InjectRepository(Klass)
    private klassesRepository: Repository<Klass>,
    private readonly roomsService: RoomsService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  async create(createKlassDto: CreateKlassDto): Promise<Klass> {
    if (
      await this.klassesRepository.findOne({
        where: { klassName: createKlassDto.klassName },
      })
    ) {
      throw new ConflictException();
    }
    const newKlass = new Klass();
    newKlass.klassName = createKlassDto.klassName;
    newKlass.dayOfWeek = createKlassDto.dayOfWeek;
    newKlass.from = createKlassDto.from;
    newKlass.to = createKlassDto.to;
    newKlass.rooms = [];

    for (const roomName of createKlassDto.roomNames) {
      const room = await this.roomsService.findOneByName(roomName);
      if (!room) {
        const newRoom = await this.roomsService.create({
          roomName: roomName,
        });
        newKlass.rooms.push(newRoom);
      } else {
        newKlass.rooms.push(room);
      }
    }
    try {
      return await this.klassesRepository.save(newKlass);
    } catch {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<UpdateKlassDto[]> {
    const klasses: Klass[] = await this.klassesRepository.find({
      relations: {
        rooms: true,
        users: true,
      },
    });

    const resData: UpdateKlassDto[] = [];
    for (const klass of klasses) {
      resData.push(this.KlassToUpdateKlassDto(klass));
    }
    return resData;
  }

  async findOneById(id: number): Promise<UpdateKlassDto> {
    const klass = await this.klassesRepository.findOne({
      where: { klassId: id },
      relations: {
        rooms: true,
        users: true,
      },
    });
    if (!klass) {
      throw new NotFoundException();
    }
    return this.KlassToUpdateKlassDto(klass);
  }

  async update(
    id: number,
    updateKlassDto: UpdateKlassDto,
  ): Promise<UpdateKlassDto> {
    const klass: Klass = await this.klassesRepository.findOne({
      where: { klassId: id },
    });
    if (!klass) {
      throw new NotFoundException();
    }
    const updateData: Klass = new Klass();
    for (const key in updateKlassDto) {
      if (key !== "klassId" && key !== "roomNames" && key !== "userNames") {
        updateData[key] = updateKlassDto[key];
      }
    }

    if (updateKlassDto?.roomNames !== undefined) {
      updateData.rooms = [];
      for (const roomNames of updateKlassDto?.roomNames) {
        const room: Room = await this.roomsService.findOneByName(roomNames);
        updateData.rooms.push(room);
      }
    }

    if (updateKlassDto?.userNames !== undefined) {
      updateData.users = [];
      for (const userNames of updateKlassDto?.userNames) {
        const user: User = await this.usersService.findOneByName(userNames);
        updateData.users.push(user);
      }
    }

    try {
      await this.klassesRepository.update(id, updateData);
      return await this.findOneById(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async remove(id: number): Promise<object> {
    const result: any = await this.klassesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException();
    } else {
      return {
        message: "DELETE was succeeded",
      };
    }
  }

  // toDo:addUserInKlassesが作成出来たら戻り値の実装
  async findAllByUserId(id: number): Promise<UpdateKlassDto[] | any> {
    const klasses: Klass[] = await this.klassesRepository
      .createQueryBuilder("klass")
      .innerJoinAndSelect("klass.rooms", "rooms")
      .innerJoinAndSelect("klass.users", "users")
      .where("users.userId = :userId", { userId: id })
      .getMany();
    const resData: UpdateKlassDto[] = [];
    for (const klass of klasses) {
      resData.push(this.KlassToUpdateKlassDto(klass));
    }
    return resData;
  }

  async addUserInKlasses(
    userId: number,
    klassId: number,
  ): Promise<UpdateKlassDto | any> {
    const klass: Klass = await this.klassesRepository.findOne({
      where: { klassId: klassId },
      relations: {
        rooms: true,
        users: true,
      },
    });

    if (!klass) {
      throw new NotFoundException();
    }

    const user: User = await this.usersService.findOneById(userId);

    for (let i = 0; i < klass.users.length; i++) {
      if (klass.users[i].userName === user.userName) {
        throw new ConflictException();
      }
    }
    klass.users.push(user);
    const newKlass: Klass = await this.klassesRepository.save(klass);
    return this.KlassToUpdateKlassDto(newKlass);
  }

  async removeUserFromKlass(
    userId: number,
    klassId: number,
  ): Promise<UpdateKlassDto> {
    const klass: Klass = await this.klassesRepository.findOne({
      where: { klassId: klassId },
      relations: {
        rooms: true,
        users: true,
      },
    });

    if (!klass) {
      throw new NotFoundException();
    }

    for (let i = 0; i < klass.users.length; i++) {
      if (klass.users[i].userId === userId) {
        klass.users.splice(i, 1);
        const newKlass = await this.klassesRepository.save(klass);
        return this.KlassToUpdateKlassDto(newKlass);
      }
      return this.KlassToUpdateKlassDto(klass);
    }
  }
  KlassToUpdateKlassDto(klass: Klass): UpdateKlassDto {
    const resData: UpdateKlassDto = new UpdateKlassDto();
    resData.klassId = klass.klassId;
    resData.klassName = klass.klassName;
    resData.dayOfWeek = klass.dayOfWeek;
    resData.from = klass.from;
    resData.to = klass.to;
    resData.roomNames = [];
    for (const room of klass.rooms) {
      resData.roomNames.push(room.roomName);
    }
    resData.userNames = [];
    for (const user of klass.users) {
      resData.userNames.push(user.userName);
    }
    return resData;
  }
  // checkTypeOfCreateKlassDto(obj: object): boolean {
  //   const comparisonCreateKlassDto: CreateKlassDto = new CreateKlassDto();
  //   comparisonCreateKlassDto.klassName = "klassName";
  //   comparisonCreateKlassDto.dayOfWeek = "dayOfWeek";
  //   comparisonCreateKlassDto.from = "from";
  //   comparisonCreateKlassDto.to = "to";
  //   comparisonCreateKlassDto.roomNames = ["roomName"]

  //   for (const key in comparisonCreateKlassDto) {
  //     if (obj[key] === undefined) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
