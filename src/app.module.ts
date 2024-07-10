import { Module } from '@nestjs/common';
import { FluxoModule } from './fluxo/fluxo.module';
import { WebhookModule } from './webhook/webhook.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    FluxoModule,
    WebhookModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env${process.env.NODE_ENV ? `` : '.development'}`,
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
