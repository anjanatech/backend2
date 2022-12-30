import { Employee } from './models/employee.model';
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports :[SequelizeModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeResolver]
})
export class EmployeeModule {}
