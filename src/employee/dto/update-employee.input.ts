import { Field ,InputType} from '@nestjs/graphql';
@InputType()
export class EmployeeUpdateDto {

    @Field()
    firstName: string
    @Field()
    lastName: string
    @Field()
    designation: string
    @Field()
    city: string
}