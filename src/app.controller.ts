import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto): string {
    try {
      return this.appService.createUser(body);
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('user')
  @HttpCode(200)
  getUsers(): User[] {
    return this.appService.getUsers();
  }
}
