import { Module, forwardRef } from "@nestjs/common";
import { KlassesService } from "./klasses.service";
import { KlassesController } from "./klasses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Klass } from "./entities/klass.entity";
import { RoomsModule } from "src/rooms/rooms.module";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Klass]),
    RoomsModule,
    forwardRef(() => UsersModule),
  ],
  controllers: [KlassesController],
  providers: [KlassesService],
  exports: [KlassesService],
})
export class KlassesModule {}
