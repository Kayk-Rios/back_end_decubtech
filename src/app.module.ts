import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SetoresModule } from './setores/setores.module';
import { LeitosModule } from './leitos/leitos.module';


@Module({
  imports: [ UsersModule, SetoresModule, LeitosModule],
  controllers: [AppController],
  providers: [AppService] ,
})
export class AppModule {}
