import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommonService } from 'src/shared';
import { Users_Temp } from './user.entity';
import { Users_TempResolver } from './user.resolver';
import { UserService } from './user.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([Users_Temp], 'webkiosk'),
        TypeOrmModule.forFeature([Users_Temp], 'default'),
    ],
    providers: [Users_TempResolver, UserService, CommonService],
})
export class Users_Temps_Copy_Module { }
