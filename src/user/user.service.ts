/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserService {

    private users: User[] = [];

    createUser(user: User) {
        this.users.push(user);
        return new Promise((resolve) => {
            setTimeout(() => resolve(user), 1000);
        });
    }

    showUsers(): Array<User> {
        return this.users;
    }
}
