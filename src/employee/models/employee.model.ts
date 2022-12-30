import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table, Unique, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
@ObjectType()
@Table
export class Employee extends Model {
    @Field()
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;
    @Field()
    @Column
    firstName: string;
    @Field()
    @Column
    lastName: string;
    @Field()
    @Column
    designation: string;
    @Field()
    @Column
    city: string;
}