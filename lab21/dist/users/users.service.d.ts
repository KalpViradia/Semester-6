import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}
export declare class UsersService {
    private users;
    private idCounter;
    findAll(): User[];
    findOne(id: number): User;
    create(createUserDto: CreateUserDto): User;
    update(id: number, updateUserDto: UpdateUserDto): User;
    delete(id: number): {
        message: string;
    };
}
