import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageResolver } from './language.resolver';
import { Colangtb, Langmstb, Mlanustb, Mmlangtb } from './entities/language.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Langmstb, Mlanustb, Colangtb, Mmlangtb])
  ],
  providers: [LanguageResolver, LanguageService]
})
export class LanguageModule { }
