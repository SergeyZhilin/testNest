import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { LinksController } from './links/links.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, LinksController],
  providers: [AppService],
})
export class AppModule {}
