import { Module } from '@nestjs/common';
import { FluxoModule } from './menu/menu.module';
import { WebhookModule } from './webhook/webhook.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { EventModule } from './events/event.module';
import { CoreModule } from './core/core.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    FluxoModule,
    WebhookModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env${process.env.NODE_ENV ? `` : '.development'}`,
      load: [configuration],
      isGlobal: true,
    }),
    EventModule,
    CoreModule,
    CacheModule.register({ isGlobal: true, ttl: 5000 }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
