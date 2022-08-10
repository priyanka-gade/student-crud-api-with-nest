import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
//get api
  @Get()
  getAllStudents() {
    return this.studentService.getStudents();
  }
//get
  @Get(':index')
  getSpecificStudent(@Param() i:any) {
    return this.studentService.getSpecificStudent(i.index);
  }

  @Post()
  createStudent(@Body() student) {
    return this.studentService.createStudent(student);
  }

  @Delete(':id')
  deleteStudent(@Param() id) {
    return this.studentService.deleteStudent(id);
  }

  @Patch(':id')
  updateStudent(@Param('id')  id, @Body() student) {
    return this.studentService.updateStudent(id, student);
  }

  @Put(':id')
  updatedObStudent(@Param('id')  id, @Body() student) {
    return this.studentService.updateStudent(id, student);
  }
}
