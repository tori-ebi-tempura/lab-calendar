import {
  BadRequestException,
  Injectable,
  NotFoundException,
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
    private readonly usersService: UsersService,
  ) {}

  async create(createKlassDto: CreateKlassDto): Promise<Klass> {
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
    return await this.klassesRepository.save(newKlass);
  }

  async findAll(): Promise<UpdateKlassDto[]> {
    const klasses = await this.klassesRepository.find({
      relations: {
        rooms: true,
      },
    });

    const resData: UpdateKlassDto[] = [];
    for (const klass of klasses) {
      const oneData = new UpdateKlassDto();
      oneData.klassId = klass.klassId;
      oneData.klassName = klass.klassName;
      oneData.dayOfWeek = klass.dayOfWeek;
      oneData.from = klass.from;
      oneData.to = klass.to;
      oneData.roomNames = [];
      for (const room of klass.rooms) {
        oneData.roomNames.push(room.roomName);
      }
      oneData.userNames = [];
      resData.push(oneData);
    }
    return resData;
  }

  async findOneById(id: number): Promise<UpdateKlassDto> {
    const klass = await this.klassesRepository.findOne({
      where: { klassId: id },
      relations: {
        rooms: true,
      },
    });

    const resData = new UpdateKlassDto();
    resData.klassId = klass?.klassId;
    resData.klassName = klass?.klassName;
    resData.dayOfWeek = klass?.dayOfWeek;
    resData.from = klass?.from;
    resData.to = klass?.to;
    if (klass?.rooms !== undefined) {
      resData.roomNames = [];
      for (const room of klass?.rooms) {
        resData.roomNames.push(room?.roomName);
      }
    }
    if (klass?.users !== undefined) {
      resData.userNames = [];
      for (const user of klass?.users) {
        resData.userNames.push(user?.userName);
      }
    }
    return resData;
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
    // return updateData;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} klass`;
  // }
}
