import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { id: 2, username: 'john_doe', email: 'john@example.com', password: 'john123', role: 'user' },
    { id: 3, username: 'jane_doe', email: 'jane@example.com', password: 'jane123', role: 'user' },
  ];

  private idCounter = 4;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
    };
    return this.users[userIndex];
  }

  delete(id: number): { message: string } {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} deleted successfully` };
  }
}
