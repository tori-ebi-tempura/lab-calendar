import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { CreateRoomDto } from "./dto/create-room.dto";

@Controller("rooms")
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    try {
      const room = await this.roomsService.create(createRoomDto);
      return room;
    } catch (error) {
      return {
        isSuccessful: error,
      };
    }
  }

  @Get()
  async findAll() {
    return await this.roomsService.findAll();
  }

  @Get(":id")
  async findOneById(@Param("id", ParseIntPipe) id: number) {
    return await this.roomsService.findOneById(id);
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateRoomDto: UpdateRoomDto) {
  //   return this.roomsService.update(+id, updateRoomDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.roomsService.remove(+id);
  // }
}
