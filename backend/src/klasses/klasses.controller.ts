import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from "@nestjs/common";
import { KlassesService } from "./klasses.service";
import { CreateKlassDto } from "./dto/create-klass.dto";
import { UpdateKlassDto } from "./dto/update-klass.dto";
import { Klass } from "./entities/klass.entity";

export interface KlassesObject {
  klasses: UpdateKlassDto[];
}

@Controller("klasses")
export class KlassesController {
  constructor(private readonly klassesService: KlassesService) {}

  @Post()
  async create(@Body() createKlassDto: CreateKlassDto): Promise<Klass> {
    return await this.klassesService.create(createKlassDto);
  }

  @Get()
  async findAll(): Promise<KlassesObject> {
    const klasses: UpdateKlassDto[] = await this.klassesService.findAll();
    return {
      klasses: klasses,
    };
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

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number): Promise<object> {
    return await this.klassesService.remove(id);
  }
}
