import { FacultyService } from './faculty.service';
import type { Faculty } from './faculty.service';
import { CreateFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';
export declare class FacultyController {
    private readonly facultyService;
    constructor(facultyService: FacultyService);
    findAll(): Faculty[];
    findOne(id: number): Faculty;
    create(createFacultyDto: CreateFacultyDto): Faculty;
    update(id: number, updateFacultyDto: UpdateFacultyDto): Faculty;
    delete(id: number): {
        message: string;
    };
}
