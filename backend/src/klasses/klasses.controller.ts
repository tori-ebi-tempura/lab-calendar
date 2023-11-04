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
import { KlassesService } from "./klasses.service";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";

@Controller("klasses")
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  async create(@Body() createKlassDto: CreateKlassDto) {
    try {
      const klass = await this.klassesService.create(createKlassDto);
      return klass;
    } catch (error) {
      return {
        isSuccessful: error
      };
    }
  }

  @Get()
  async findAll() {
    return await this.klassesService.findAll();
  }

  @Get(":id")
  async findOneById(@Param("id", ParseIntPipe) id: number) {
      return await this.klassesService.findOneById(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateKlassDto: UpdateKlassDto) {
    return this.klassesService.update(+id, updateKlassDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.klassesService.remove(+id);
  }
}
