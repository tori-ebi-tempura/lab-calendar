import { Module } from '@nestjs/common';
import { KlassesService } from './klasses.service';
import { KlassesController } from './klasses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Klass } from './entities/klass.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Klass])],
  controllers: [KlassesController],
  providers: [KlassesService],
})
export class KlassesModule {}
