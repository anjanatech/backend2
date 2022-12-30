import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/employee/models/user.model';
import { JwtPayload } from './interface/Jwt-Payload.interface';


@Injectable()
export class Jwtstartegy extends PassportStrategy(Strategy){
    constructor(@InjectModel(User) private userModel) {
        super({
          secretOrKey :'topSecret51',
          jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }
    async validate(payload:JwtPayload):Promise<User>{
        const {userName} = payload;
        const user= await this.userModel.findOne({where:{userName}});
        if(!user)
        {
            throw new UnauthorizedException();
        } return user;
    }
}
