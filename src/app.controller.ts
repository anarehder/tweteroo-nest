import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';
import { CreateTweetDto } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

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
    return this.appService.createUser(body);
  }

  @Get('user')
  @HttpCode(200)
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post('tweets')
  createTweet(@Body() body: CreateTweetDto): string {
    return this.appService.createTweet(body);
  }

  @Get('tweets')
  @HttpCode(200)
  getAllTweets(@Query('page') page: number | undefined): Tweet[] {
    return this.appService.getTweets(page);
  }
}
