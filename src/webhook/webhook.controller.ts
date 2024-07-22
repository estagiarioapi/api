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
    return res.status(200).json(response);
  }

  @Post()
  async handler(@Req() req: Request, @Res() res: Response) {
    try {
      const response = await this.webhookService.handler(req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.error('Erro ao processar webhook:', error);
      return res.status(500).json({
        message: 'Erro ao processar webhook',
        error: error.message,
      });
    }
  }
}
