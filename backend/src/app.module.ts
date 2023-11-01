import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [ClassesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
