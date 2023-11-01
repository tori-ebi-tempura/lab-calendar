import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClassesModule } from "./classes/classes.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
