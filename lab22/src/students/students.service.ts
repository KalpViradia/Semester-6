import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto);
    return await this.studentsRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOne({
      where: { StudentID: id },
    });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.findOne(id);
    Object.assign(student, updateStudentDto);
    return await this.studentsRepository.save(student);
  }

  async remove(id: number): Promise<{ message: string }> {
    const student = await this.findOne(id);
    await this.studentsRepository.remove(student);
    return { message: `Student with ID ${id} has been deleted successfully` };
  }
}
