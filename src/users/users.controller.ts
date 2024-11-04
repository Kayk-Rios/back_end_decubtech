import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() body: { username: string; password: string }) {
      return this.usersService.createUser(body);
    }
  
    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
      const user = await this.usersService.login(body.username, body.password);
      if (!user) {
        return { message: 'Invalid credentials' };
      }
      return user;
    }


}