import { UsersService } from './users.service';
import type { User } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): User[];
    findOne(id: number): User;
    create(createUserDto: CreateUserDto): User;
    update(id: number, updateUserDto: UpdateUserDto): User;
    delete(id: number): {
        message: string;
    };
}
