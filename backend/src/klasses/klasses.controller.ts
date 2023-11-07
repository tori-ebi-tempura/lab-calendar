import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { KlassesService } from "./klasses.service";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";
import { Klass } from "./entities/klass.entity";

@Controller("klasses")
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  async create(@Body() createKlassDto: CreateKlassDto): Promise<Klass> {
    try {
      const klass = await this.klassesService.create(createKlassDto);
      return klass;
    } catch (error) {
      return null;
    }
  }

  @Get()
  async findAll(): Promise<UpdateKlassDto[]> {
    return await this.klassesService.findAll();
  }

  @Get(":id")
  async findOneById(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<UpdateKlassDto> {
    return await this.klassesService.findOneById(id);
  }

  @Patch(":id")
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateKlassDto: UpdateKlassDto,
  ): Promise<UpdateKlassDto> {
    return await this.klassesService.update(id, updateKlassDto);
  }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.klassesService.remove(+id);
  // }
}
