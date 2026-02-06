import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';

export interface Faculty {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
}

@Injectable()
export class FacultyService {
  private faculties: Faculty[] = [
    { id: 1, name: 'Dr. Smith', email: 'smith@university.com', department: 'Computer Science', designation: 'Professor' },
    { id: 2, name: 'Dr. Johnson', email: 'johnson@university.com', department: 'Electronics', designation: 'Associate Professor' },
    { id: 3, name: 'Dr. Williams', email: 'williams@university.com', department: 'Mathematics', designation: 'Assistant Professor' },
  ];

  private idCounter = 4;

  findAll(): Faculty[] {
    return this.faculties;
  }

  findOne(id: number): Faculty {
    const faculty = this.faculties.find((f) => f.id === id);
    if (!faculty) {
      throw new NotFoundException(`Faculty with ID ${id} not found`);
    }
    return faculty;
  }

  create(createFacultyDto: CreateFacultyDto): Faculty {
    const newFaculty: Faculty = {
      id: this.idCounter++,
      ...createFacultyDto,
    };
    this.faculties.push(newFaculty);
    return newFaculty;
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto): Faculty {
    const facultyIndex = this.faculties.findIndex((f) => f.id === id);
    if (facultyIndex === -1) {
      throw new NotFoundException(`Faculty with ID ${id} not found`);
    }
    this.faculties[facultyIndex] = {
      ...this.faculties[facultyIndex],
      ...updateFacultyDto,
    };
    return this.faculties[facultyIndex];
  }

  delete(id: number): { message: string } {
    const facultyIndex = this.faculties.findIndex((f) => f.id === id);
    if (facultyIndex === -1) {
      throw new NotFoundException(`Faculty with ID ${id} not found`);
    }
    this.faculties.splice(facultyIndex, 1);
    return { message: `Faculty with ID ${id} deleted successfully` };
  }
}
