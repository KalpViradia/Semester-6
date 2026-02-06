import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
export interface Student {
    id: number;
    name: string;
    email: string;
    age: number;
    course: string;
}
export declare class StudentService {
    private students;
    private idCounter;
    findAll(): Student[];
    findOne(id: number): Student;
    create(createStudentDto: CreateStudentDto): Student;
    update(id: number, updateStudentDto: UpdateStudentDto): Student;
    delete(id: number): {
        message: string;
    };
}
