import { Injectable } from "@nestjs/common";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Klass } from "./entities/klass.entity";
import { Repository } from "typeorm";
import { RoomsService } from "src/rooms/rooms.service";

@Injectable()
export class KlassesService {
  constructor(
    @InjectRepository(Klass)
    private klassesRepository: Repository<Klass>,
    private readonly roomsService: RoomsService,
  ) {}

  async create(createKlassDto: CreateKlassDto) {
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

  async findAll() {
    const klasses = await this.klassesRepository.find({
      relations: {
        rooms: true,
      },
    });

    const resData: CreateKlassDto[] = [];
    for (const klass of klasses) {
      const oneData = new CreateKlassDto();
      oneData.klassName = klass.klassName;
      oneData.dayOfWeek = klass.dayOfWeek;
      oneData.from = klass.from;
      oneData.to = klass.to;
      oneData.roomNames = [];
      for (const room of klass.rooms) {
        oneData.roomNames.push(room.roomName);
      }
      resData.push(oneData);
    }
    return resData;
  }

  async findOneById(id: number) {
    const klass = await this.klassesRepository.findOne({
      where: { id: id },
      relations: {
        rooms: true,
      },
    });

    const resData = new CreateKlassDto();
    resData.klassName = klass.klassName;
    resData.dayOfWeek = klass.dayOfWeek;
    resData.from = klass.from;
    resData.to = klass.to;
    resData.roomNames = [];
    for (const room of klass.rooms) {
      resData.roomNames.push(room.roomName);
    }
    return resData;
  }

  update(id: number, updateKlassDto: UpdateKlassDto) {
    return `This action updates a #${id} klass`;
  }

  remove(id: number) {
    return `This action removes a #${id} klass`;
  }
}
