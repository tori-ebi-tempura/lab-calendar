import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Room } from "./entities/room.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    return await this.roomsRepository.save(createRoomDto);
  }

  async findAll() {
    return await this.roomsRepository.find();
  }

  async findOneById(id: number) {
    return await this.roomsRepository.findOne({ where: { id: id } });
  }

  async findOneByName(roomName: string) {
    return await this.roomsRepository.findOne({
      where: { roomName: roomName },
    });
  }

  // update(id: number, updateRoomDto: UpdateRoomDto) {
  //   return `This action updates a #${id} room`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} room`;
  // }
}
