import { User } from './user.entity';

export class Tweet extends User {
  private tweet: string;

  constructor(username: string, avatar: string, tweet: string) {
    super(username, avatar);
    this.tweet = tweet;
  }
}
