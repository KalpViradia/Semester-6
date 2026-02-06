interface Faculty {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
}
export declare class FacultyController {
    private facultyMembers;
    findAll(): Faculty[];
    findOne(id: string): Faculty | {
        message: string;
    };
    insert(faculty: Omit<Faculty, 'id'>): Faculty;
    update(id: string, updateData: Partial<Faculty>): Faculty | {
        message: string;
    };
    delete(id: string): {
        message: string;
    };
}
export {};
