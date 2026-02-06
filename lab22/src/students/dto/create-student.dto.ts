import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  Min,
  Max,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  StudentName: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  StudentAge: number;

  @IsString()
  StudentGender: string;

  @IsString()
  StudentRollNo: string;

  @IsNumber()
  @Min(1)
  @Max(8)
  StudentSemester: number;

  @IsOptional()
  @IsEmail()
  StudentEmail?: string;

  @IsOptional()
  @IsString()
  StudentPhone?: string;

  @IsOptional()
  @IsString()
  StudentAddress?: string;

  @IsOptional()
  @IsString()
  StudentDepartment?: string;
}
