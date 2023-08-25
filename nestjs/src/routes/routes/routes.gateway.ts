import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { RoutesDriverService } from '../routes-driver/routes-driver.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoutesGateway {
  constructor(private routesDriverService: RoutesDriverService) {}

  @SubscribeMessage('new-points')
  async handleMessage(
    client: Socket,
    payload: { route_id: string; lat: number; lng: number },
  ) {
    await this.routesDriverService.createOrUpdate(payload);
    client.broadcast.emit('admin-new-points', payload);
    client.broadcast.emit(`new-points/${payload.route_id}`, payload);
  }
}
