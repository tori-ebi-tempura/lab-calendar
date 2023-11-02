import { Injectable } from '@nestjs/common';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Klass } from './entities/klass.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KlassesService {
  constructor(
    @InjectRepository(Klass)
    private klassesRepository: Repository<Klass>,
  ){}

  async create(createKlassDto: CreateKlassDto) {
    return await this.klassesRepository.save(createKlassDto);
    // return 'This action adds a new klass';
  }

  async findAll() {
    return await this.klassesRepository.find();
    // return `This action returns all klasses`;
  }

  async findOne(id: number) {
    return await this.klassesRepository.findOneBy({ id });
    // return `This action returns a #${id} klass`;
  }

  update(id: number, updateKlassDto: UpdateKlassDto) {
    return `This action updates a #${id} klass`;
  }

  remove(id: number) {
    return `This action removes a #${id} klass`;
  }
}
