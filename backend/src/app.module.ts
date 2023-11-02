import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { KlassesModule } from './klasses/klasses.module';

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
    KlassesModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
