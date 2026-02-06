export class CreateFacultyDto {
  name: string;
  email: string;
  department: string;
  designation: string;
}

export class UpdateFacultyDto {
  name?: string;
  email?: string;
  department?: string;
  designation?: string;
}
