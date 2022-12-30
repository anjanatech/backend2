import { Jwtstartegy } from './Jwt-Strategy';
import { Module } from '@nestjs/common';
import { User } from 'src/employee/models/user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports :[PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    secret:'topSecret51',
    signOptions:{
      expiresIn:3600
    }
}),
  SequelizeModule.forFeature([User])],
  providers: [UserResolver, UserService,Jwtstartegy]
})
export class UserModule {}
