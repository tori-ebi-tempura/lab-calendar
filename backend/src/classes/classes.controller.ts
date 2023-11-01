import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";

@Controller("classes")
@Controller({ host: "admin.example.com" })
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  async create(@Body() createClassDto: CreateClassDto) {
    try {
      const klass = await this.classesService.create(createClassDto);
      return klass;
    } catch (error) {
      return {
        isSuccessful: error
      };
    }
     
  }

  @Get()
  async findAll() {
    return await this.classesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return await this.classesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(+id, updateClassDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.classesService.remove(+id);
  }
}
