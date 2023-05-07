import { Injectable } from '@nestjs/common';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';

@Injectable()
export class MessageBookService {
  create(createMessageBookDto: CreateMessageBookDto) {
    return 'This action adds a new messageBook';
  }

  findAll() {
    return `This action returns all messageBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageBook`;
  }

  update(id: number, updateMessageBookDto: UpdateMessageBookDto) {
    return `This action updates a #${id} messageBook`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageBook`;
  }
}
