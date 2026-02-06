export class CreateStudentDto {
  name: string;
  email: string;
  age: number;
  course: string;
}

export class UpdateStudentDto {
  name?: string;
  email?: string;
  age?: number;
  course?: string;
}
