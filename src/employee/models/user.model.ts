import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table, Unique, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
@ObjectType()
@Table
export class User extends Model {
    @Field()
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;
    @Field()
    @Column
    Name: string;
    @Field()
    @Column
    userName: string;
    @Field()
    @Column
    password: string;
    @Field()
    @Column
    status: boolean;
}