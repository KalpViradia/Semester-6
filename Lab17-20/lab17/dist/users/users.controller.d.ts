interface User {
    id: number;
    username: string;
    email: string;
    role: string;
}
export declare class UsersController {
    private users;
    findAll(): User[];
    findOne(id: string): User | {
        message: string;
    };
    insert(user: Omit<User, 'id'>): User;
    update(id: string, updateData: Partial<User>): User | {
        message: string;
    };
    delete(id: string): {
        message: string;
    };
}
export {};
