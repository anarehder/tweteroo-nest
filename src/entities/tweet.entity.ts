import { User } from './user.entity';

export class Tweet extends User {
  public name: string;
  public avatar: string;
  public tweet: string;

  constructor(name: string, avatar: string, tweet: string) {
    super(name, avatar);
    this.tweet = tweet;
  }
}
