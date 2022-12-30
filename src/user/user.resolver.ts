import { UserService } from './user.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUserDto } from './dto/AuthUserDto.dto';
import { User } from 'src/employee/models/user.model';
@Resolver()
export class UserResolver {
    constructor(private userService: UserService) { }
@Mutation(()=>String)
async sigin(@Args('siginuser') authUserDto:AuthUserDto):Promise<string>{
    return this.userService.signin(authUserDto);
}

}
