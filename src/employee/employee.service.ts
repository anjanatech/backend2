import { Args } from '@nestjs/graphql';
import {  FetchEmployeesArgs } from './dto/fetch-employee.input';
import { InjectModel } from '@nestjs/sequelize';
import { ConflictException, Injectable } from '@nestjs/common';
import { Employee } from './models/employee.model';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { EmployeeUpdateDto } from './dto/update-employee.input';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(Employee) private employeeModel: typeof Employee) { }
  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.findAll();
  }
  
  async create(employee: EmployeeCreateDto): Promise<Employee> {
    const createUser = this.employeeModel.create({ firstName: employee.firstName, lastName: employee.lastName, designation: employee.designation, city: employee.city });
    return await createUser
  }
  async findOne(id: number): Promise<Employee> {
    return await this.employeeModel.findOne({ where: { id }, });
  }
  async update(id: number, userone: EmployeeUpdateDto): Promise<Employee> {
    const user = await this.findOne(id);
    //user.firstName = updatedemployee.firstName || user.firstName;
    //user.lastName = updatedemployee.lastName || user.lastName;
    //user.designation = updatedemployee.designation || user.designation;
    //user.city = updatedemployee.city || user.city;
    //const data = await user.save();
    //return data;
    return user.update(userone);
  }
  async remove(id: number): Promise<String> {
    const user = await this.findOne(id);
    try {
      await user.destroy();
      return 'deleted'
    }
    catch (error) {
      throw new ConflictException(error.errors[0].message)
    }}
  
  async getCount(): Promise<number> {
    const count = await this.employeeModel.count()
    return count
  }
  async fetchEmployee(args: FetchEmployeesArgs): Promise<Employee[]> {
    const Employees:Employee[] = (await this.employeeModel.findAll({
      limit: args.limit,
      offset:args.limit *args.offset
    })) as Employee[]
    return Employees;
  }

}
