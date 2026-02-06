import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [StudentModule, FacultyModule, ProductModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
