import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';
import { TypeOrmModule } from '@nestjs/typeorm'

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
    ClassesModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
