/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    @Post()
    createUser(@Body() user: User) {
        return this.userService.createUser(user);
    }

    @Get()
    showUsers(): Array<User>{
        return this.userService.showUsers();
    }
}