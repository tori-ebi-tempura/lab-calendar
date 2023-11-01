import { Injectable } from "@nestjs/common";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classesRepository: Repository<Class>,
  ){}

  async create(createClassDto: CreateClassDto) {
    return await this.classesRepository.save(createClassDto);
    // return "This action adds a new class";
  }

  async findAll(): Promise<Class[]>{
    return await this.classesRepository.find();
    // return "This action returns all classes";
  }

  async findOne(id: number) {
    return await this.classesRepository.findOneBy({ id });
    // return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
