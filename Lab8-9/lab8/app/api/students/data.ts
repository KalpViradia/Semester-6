export interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  course: string;
}

const students: Student[] = [
  { id: 1, name: "Arjun Kumar", age: 20, email: "arjun@example.com", course: "Computer Science" },
  { id: 2, name: "Priya Sharma", age: 21, email: "priya@example.com", course: "Information Technology" },
  { id: 3, name: "Rahul Patel", age: 19, email: "rahul@example.com", course: "Electronics" },
  { id: 4, name: "Sneha Gupta", age: 22, email: "sneha@example.com", course: "Mechanical" },
  { id: 5, name: "Vikram Singh", age: 20, email: "vikram@example.com", course: "Civil Engineering" },
];

let nextId = 6;

export function getAllStudents(): Student[] {
  return students;
}

export function getStudentById(id: number): Student | undefined {
  return students.find((s) => s.id === id);
}

export function addStudent(student: Omit<Student, "id">): Student {
  const newStudent = { ...student, id: nextId++ };
  students.push(newStudent);
  return newStudent;
}

export function updateStudent(id: number, updates: Partial<Omit<Student, "id">>): Student | null {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  students[index] = { ...students[index], ...updates };
  return students[index];
}

export function deleteStudent(id: number): boolean {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return false;
  students.splice(index, 1);
  return true;
}
