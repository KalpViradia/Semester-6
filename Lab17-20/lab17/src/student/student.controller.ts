import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

@Controller('student')
export class StudentController {
  private students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      course: 'Computer Science',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      course: 'Mathematics',
    },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', course: 'Physics' },
  ];

  @Get('hello')
  helloWorld(): string {
    return 'hello world';
  }

  @Get()
  findAll(): Student[] {
    return this.students;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Student | { message: string } {
    const student = this.students.find((s) => s.id === parseInt(id));
    if (!student) {
      return { message: `Student with id ${id} not found` };
    }
    return student;
  }

  @Post()
  insert(@Body() student: Omit<Student, 'id'>): Student {
    const newId = Math.max(...this.students.map((s) => s.id), 0) + 1;
    const newStudent: Student = { id: newId, ...student };
    this.students.push(newStudent);
    return newStudent;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Student>,
  ): Student | { message: string } {
    const index = this.students.findIndex((s) => s.id === parseInt(id));
    if (index === -1) {
      return { message: `Student with id ${id} not found` };
    }
    this.students[index] = { ...this.students[index], ...updateData };
    return this.students[index];
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const index = this.students.findIndex((s) => s.id === parseInt(id));
    if (index === -1) {
      return { message: `Student with id ${id} not found` };
    }
    this.students.splice(index, 1);
    return { message: `Student with id ${id} deleted successfully` };
  }
}
