import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // GET      /users    or  /users?role=value
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }

  // GET      /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findUserById(+id);
  }

  // POST     /users
  @Post()
  create(@Body() user: User) {
    return this.userService.createUser(user);
  }

  // PATCH    /users/:id/
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.userService.updateUser(+id, user);
  }

  // DELETE   /users/:id/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUserById(+id);
  }
}
