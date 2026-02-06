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
import { FacultyService } from './faculty.service';
import type { Faculty } from './faculty.service';
import { CreateFacultyDto, UpdateFacultyDto } from './dto/faculty.dto';

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Get()
  findAll(): Faculty[] {
    return this.facultyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Faculty {
    return this.facultyService.findOne(id);
  }

  @Post()
  create(@Body() createFacultyDto: CreateFacultyDto): Faculty {
    return this.facultyService.create(createFacultyDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFacultyDto: UpdateFacultyDto,
  ): Faculty {
    return this.facultyService.update(id, updateFacultyDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): { message: string } {
    return this.facultyService.delete(id);
  }
}
