import { FetchEmployeesArgs } from './dto/fetch-employee.input';
import { EmployeeUpdateDto } from './dto/update-employee.input';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './models/employee.model';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver(() => Employee)
export class EmployeeResolver {
    constructor(private employeeService: EmployeeService) { }
    @Query(() => [Employee])
    async findAll(): Promise<Employee[]> {
        return await this.employeeService.findAll();
    }
    @Query(() => Employee, { name: "getOneEmployees" })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.employeeService.findOne(id);
    }
    @Mutation(() => Employee, { name: "createEmployer" })
    create(@Args('employee') employee: EmployeeCreateDto) {
        return this.employeeService.create(employee)
    }
    @Mutation(() => Employee)
    async updateEmp(@Args('id', { type: () => Int }) id: number,
        @Args('updatedEmp') updatedEmployee: EmployeeUpdateDto,) {
        return this.employeeService.update(id, updatedEmployee);
    }
    @Mutation((returns) => String)
    async deleteEmp(@Args('id', { type: () => Int }) id: number): Promise<String> {
        return await this.employeeService.remove(id);
    }
    @Query(() => [Employee], { name: 'employeefilter' })
    async fetchEmployee(@Args() args: FetchEmployeesArgs): Promise<Employee[]> {
      return this.employeeService.fetchEmployee(args);
    }
  }

