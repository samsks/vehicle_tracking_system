import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesGateway } from './routes/routes.gateway';

@Module({
  imports: [MapsModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService, RoutesGateway],
})
export class RoutesModule {}
