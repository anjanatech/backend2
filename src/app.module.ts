import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';

@Module({
  imports: [EmployeeModule,UserModule,
    GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphqlschema.gql'),
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Database123',
    database: 'Employee1',
    autoLoadModels:true,
    synchronize: true,}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
