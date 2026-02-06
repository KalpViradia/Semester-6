import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

export interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
  course: string;
}

@Injectable()
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 20, course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 21, course: 'Information Technology' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 22, course: 'Electronics' },
  ];

  private idCounter = 4;

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  create(createStudentDto: CreateStudentDto): Student {
    const newStudent: Student = {
      id: this.idCounter++,
      ...createStudentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  update(id: number, updateStudentDto: UpdateStudentDto): Student {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    this.students[studentIndex] = {
      ...this.students[studentIndex],
      ...updateStudentDto,
    };
    return this.students[studentIndex];
  }

  delete(id: number): { message: string } {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    this.students.splice(studentIndex, 1);
    return { message: `Student with ID ${id} deleted successfully` };
  }
}
