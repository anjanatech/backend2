import { Field, Int, ArgsType } from '@nestjs/graphql'
import { Max, Min } from 'class-validator'

@ArgsType()
export class FetchEmployeesArgs {
  @Field(() => Int)
  @Min(0)
  offset:number

  @Field(() => Int)
  @Min(1)
  @Max(50)
  limit:number
}