import { Injectable } from '@nestjs/common';
import { CreateChaseDto } from './dto/create-chase.dto';
import { UpdateChaseDto } from './dto/update-chase.dto';

@Injectable()
export class ChaseService {
  create(createChaseDto: CreateChaseDto) {
    return 'This action adds a new chase';
  }

  findAll() {
    return `This action returns all chase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chase`;
  }

  update(id: number, updateChaseDto: UpdateChaseDto) {
    return `This action updates a #${id} chase`;
  }

  remove(id: number) {
    return `This action removes a #${id} chase`;
  }
}
