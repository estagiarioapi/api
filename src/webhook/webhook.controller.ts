import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Get()
  async handle(@Req() req: Request, @Res() res: Response) {
    console.log('controller:', req.body);
    const response = await this.webhookService.handler(req.body);
    return res.json(response);
  }

  @Post()
  async handler(@Req() req: Request, @Res() res: Response) {
    const response = await this.webhookService.handler(req.body);
    return res.json(response);
  }
}
