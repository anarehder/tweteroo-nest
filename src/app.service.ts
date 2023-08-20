import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return "I'm okay!";
  }

  private users: User[]; // persistencia em memoria
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  createUser(body): string {
    if (this.users.find((user) => user.username === body.username)) {
      throw new UnauthorizedException('This username already exists');
    } else {
      this.users.push(body);
    }

    return 'OK';
  }

  getUsers() {
    console.log(this.users);
    return this.users;
  }

  createTweet(body): string {
    const user = this.users.find((user) => user.username === body.username);
    if (!user) {
      throw new UnauthorizedException('This user does not exists');
    } else {
      const fullTweet: Tweet = {
        username: body.username,
        tweet: body.tweet,
        avatar: user.avatar,
      };
      this.tweets.push(fullTweet);
    }

    return 'OK';
  }
}
