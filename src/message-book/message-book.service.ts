import { Injectable } from '@nestjs/common';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';
import { MessageBook } from './entities/message-book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MessageBookService {
  constructor(
    @InjectRepository(MessageBook)
    private MessageBookRepository: Repository<MessageBook>,
  ) { }
  
  create(createMessageBookDto: CreateMessageBookDto) {
    const data = new MessageBook()
    data.content = createMessageBookDto.content
    data.likes = createMessageBookDto.likes
    data.userId = createMessageBookDto.userId
    return this.MessageBookRepository.save(data)
  }

  findAll(): Promise<MessageBook[] | null> {
    return this.MessageBookRepository.find()
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
