import { Module } from '@nestjs/common';
import { BoardModule } from './boards/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './boards/config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardModule, AuthModule],
})
export class AppModule {}
