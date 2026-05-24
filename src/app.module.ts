import { Module } from '@nestjs/common';
import { BoardModule } from './boards/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './boards/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardModule],
})
export class AppModule {}
