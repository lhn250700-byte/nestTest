import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly repo: Repository<Board>,
  ) {}

  async findOne(id: number) {
    return this.repo.findOne({
      where: { id },
    });
  }
}
