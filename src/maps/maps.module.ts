import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class MapsModule {}
