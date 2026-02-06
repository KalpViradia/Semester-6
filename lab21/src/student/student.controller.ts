import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import type { Student } from './student.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Student[] {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Student {
    return this.studentService.findOne(id);
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Student {
    return this.studentService.create(createStudentDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Student {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): { message: string } {
    return this.studentService.delete(id);
  }
}
