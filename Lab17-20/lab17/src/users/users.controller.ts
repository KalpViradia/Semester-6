import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

@Controller('users')
export class UsersController {
  private users: User[] = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'johndoe', email: 'john@example.com', role: 'user' },
    {
      id: 3,
      username: 'janesmith',
      email: 'jane@example.com',
      role: 'moderator',
    },
  ];

  @Get()
  findAll(): User[] {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | { message: string } {
    const user = this.users.find((u) => u.id === parseInt(id));
    if (!user) {
      return { message: `User with id ${id} not found` };
    }
    return user;
  }

  @Post()
  insert(@Body() user: Omit<User, 'id'>): User {
    const newId = Math.max(...this.users.map((u) => u.id), 0) + 1;
    const newUser: User = { id: newId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<User>,
  ): User | { message: string } {
    const index = this.users.findIndex((u) => u.id === parseInt(id));
    if (index === -1) {
      return { message: `User with id ${id} not found` };
    }
    this.users[index] = { ...this.users[index], ...updateData };
    return this.users[index];
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const index = this.users.findIndex((u) => u.id === parseInt(id));
    if (index === -1) {
      return { message: `User with id ${id} not found` };
    }
    this.users.splice(index, 1);
    return { message: `User with id ${id} deleted successfully` };
  }
}
