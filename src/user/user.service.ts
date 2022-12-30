import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/employee/models/user.model';
import { AuthUserDto } from './dto/AuthUserDto.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/Jwt-Payload.interface';
@Injectable()
export class UserService {
    constructor(@InjectModel(User) 
    private userModel: typeof User,
    private jwtService: JwtService) { }
    async signin(authUserDto:AuthUserDto):Promise<string>{
        const {userName,password}= authUserDto
        const user = await this.userModel.findOne({where:{userName}})
        if(user&& (await bcrypt.compare(password,user.password))){
         const payload : JwtPayload={ userName };
         const accessToken : string = await this.jwtService.sign(payload);
         return  accessToken
        }else {
          throw new UnauthorizedException('Your login credentials are wrong')
        }
      }
}
