import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateUserData {
    username: string;
    password: string;
  }

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: CreateUserData) {
      return this.prisma.user.create({ 
        data: {
          username: data.username,
          password: data.password
        } 
      });
    }
  
    async login(username: string, password: string) {
      return this.prisma.user.findFirst({
        where: {
          username,
          password,
        },
      });
    }

}
