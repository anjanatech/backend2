import { Field ,InputType} from '@nestjs/graphql';

import { Column, Model, Table } from 'sequelize-typescript';
@InputType()
export class EmployeeCreateDto {

    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
   designation: string;
   @Field()

    city: string;
}