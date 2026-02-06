import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

interface Faculty {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
}

@Controller('faculty')
export class FacultyController {
  private facultyMembers: Faculty[] = [
    {
      id: 1,
      name: 'Dr. Alice Brown',
      email: 'alice@university.edu',
      department: 'Computer Science',
      designation: 'Professor',
    },
    {
      id: 2,
      name: 'Dr. Charlie Wilson',
      email: 'charlie@university.edu',
      department: 'Mathematics',
      designation: 'Associate Professor',
    },
    {
      id: 3,
      name: 'Dr. Diana Lee',
      email: 'diana@university.edu',
      department: 'Physics',
      designation: 'Assistant Professor',
    },
  ];

  @Get()
  findAll(): Faculty[] {
    return this.facultyMembers;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Faculty | { message: string } {
    const faculty = this.facultyMembers.find((f) => f.id === parseInt(id));
    if (!faculty) {
      return { message: `Faculty member with id ${id} not found` };
    }
    return faculty;
  }

  @Post()
  insert(@Body() faculty: Omit<Faculty, 'id'>): Faculty {
    const newId = Math.max(...this.facultyMembers.map((f) => f.id), 0) + 1;
    const newFaculty: Faculty = { id: newId, ...faculty };
    this.facultyMembers.push(newFaculty);
    return newFaculty;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Faculty>,
  ): Faculty | { message: string } {
    const index = this.facultyMembers.findIndex((f) => f.id === parseInt(id));
    if (index === -1) {
      return { message: `Faculty member with id ${id} not found` };
    }
    this.facultyMembers[index] = {
      ...this.facultyMembers[index],
      ...updateData,
    };
    return this.facultyMembers[index];
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const index = this.facultyMembers.findIndex((f) => f.id === parseInt(id));
    if (index === -1) {
      return { message: `Faculty member with id ${id} not found` };
    }
    this.facultyMembers.splice(index, 1);
    return { message: `Faculty member with id ${id} deleted successfully` };
  }
}
