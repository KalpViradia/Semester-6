import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { FacultyController } from './faculty/faculty.controller';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { DemosController } from './demos/demos.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    StudentController,
    FacultyController,
    ProductsController,
    UsersController,
    DemosController,
  ],
  providers: [AppService],
})
export class AppModule {}
