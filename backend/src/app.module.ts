import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { KlassesModule } from "./klasses/klasses.module";
import { RoomsModule } from "./rooms/rooms.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db",
      port: 5432,
      username: "user",
      password: "password",
      database: "labdatabase",
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env"]
    }),
    KlassesModule,
    RoomsModule,
    UsersModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
