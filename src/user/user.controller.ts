/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    @Post()
    createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user);
    }

    @Get()
    showUsers(): Array<User>{
        return this.userService.showUsers();
    }
}