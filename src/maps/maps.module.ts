import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [PlacesController],
  providers: [
    PlacesService,
    {
      provide: GoogleMapsClient,
      useValue: new GoogleMapsClient(),
    },
  ],
})
export class MapsModule {}
