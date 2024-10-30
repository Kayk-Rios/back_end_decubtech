import { Module } from '@nestjs/common';
import { LeitosService } from './leitos.service';
import { LeitosController } from './leitos.controller';

@Module({
  providers: [LeitosService],
  controllers: [LeitosController]
})
export class LeitosModule {}
