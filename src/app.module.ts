import { Module } from '@nestjs/common';
import { FluxoModule } from './menu/menu.module';
import { WebhookModule } from './webhook/webhook.module';
import { EventModule } from './events/event.module';
import { CoreModule } from './core/core.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    FluxoModule,
    WebhookModule,
    EventModule,
    CoreModule,
    CacheModule.register({ isGlobal: true, ttl: 5000 }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
