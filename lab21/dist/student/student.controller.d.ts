import { StudentService } from './student.service';
import type { Student } from './student.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Student[];
    findOne(id: number): Student;
    create(createStudentDto: CreateStudentDto): Student;
    update(id: number, updateStudentDto: UpdateStudentDto): Student;
    delete(id: number): {
        message: string;
    };
}
