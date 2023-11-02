import { Module } from "@nestjs/common";
import { KlassesService } from "./klasses.service";
import { KlassesController } from "./klasses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Klass } from "./entities/klass.entity";
import { RoomsModule } from "src/rooms/rooms.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Klass]),
    RoomsModule
  ],
  controllers: [KlassesController],
  providers: [KlassesService],
})
export class KlassesModule {}
