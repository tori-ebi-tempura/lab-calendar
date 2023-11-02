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
    private readonly roomsService: RoomsService
  ) {}

  async create(createKlassDto: CreateKlassDto) {
    // for (const room of createKlassDto.room) {
      // this.roomsService.findOne("")
    // }
    return await this.klassesRepository.save(createKlassDto);
  }

  async findAll() {
    return await this.klassesRepository.find();
  }

  async findOne(id: number) {
    return await this.klassesRepository.findOneBy({ id });
  }

  update(id: number, updateKlassDto: UpdateKlassDto) {
    return `This action updates a #${id} klass`;
  }

  remove(id: number) {
    return `This action removes a #${id} klass`;
  }
}
