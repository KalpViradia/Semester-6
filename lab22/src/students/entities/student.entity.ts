import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  StudentID: number;

  @Column({ length: 100 })
  StudentName: string;

  @Column()
  StudentAge: number;

  @Column({ length: 10 })
  StudentGender: string;

  @Column({ length: 20, unique: true })
  StudentRollNo: string;

  @Column()
  StudentSemester: number;

  @Column({ length: 100, nullable: true })
  StudentEmail: string;

  @Column({ length: 15, nullable: true })
  StudentPhone: string;

  @Column({ length: 255, nullable: true })
  StudentAddress: string;

  @Column({ length: 100, nullable: true })
  StudentDepartment: string;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
