interface Student {
    id: number;
    name: string;
    email: string;
    course: string;
}
export declare class StudentController {
    private students;
    helloWorld(): string;
    findAll(): Student[];
    findOne(id: string): Student | {
        message: string;
    };
    insert(student: Omit<Student, 'id'>): Student;
    update(id: string, updateData: Partial<Student>): Student | {
        message: string;
    };
    delete(id: string): {
        message: string;
    };
}
export {};
