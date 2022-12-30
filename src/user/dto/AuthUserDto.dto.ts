import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
@InputType()
export class AuthUserDto {
    @Field()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    userName: string;

    @Field()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password is too weak' })
    password: string;

}