import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
//import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return "I'm okay!";
  }

  private users: User[]; // persistencia em memoria

  constructor() {
    this.users = [];
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
}
