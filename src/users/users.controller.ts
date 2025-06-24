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

@Controller('users')
export class UsersController {
  // GET      /users    or  /users?role=value
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // GET      /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // POST     /users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // PATCH    /users/:id/
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }

  // DELETE   /users/:id/
  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }
}
