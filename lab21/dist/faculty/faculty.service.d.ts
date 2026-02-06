import { CreateFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';
export interface Faculty {
    id: number;
    name: string;
    email: string;
    department: string;
    designation: string;
}
export declare class FacultyService {
    private faculties;
    private idCounter;
    findAll(): Faculty[];
    findOne(id: number): Faculty;
    create(createFacultyDto: CreateFacultyDto): Faculty;
    update(id: number, updateFacultyDto: UpdateFacultyDto): Faculty;
    delete(id: number): {
        message: string;
    };
}
