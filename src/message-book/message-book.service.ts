import { Injectable } from '@nestjs/common';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';
import { MessageBook } from './entities/message-book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
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
    data.email = createMessageBookDto.email
    return this.MessageBookRepository.save(data)
  }

  findAll(): Promise<MessageBook[] | null> {
    return this.MessageBookRepository.find()
  }

  search(query: { keyWord: string }) {
    return this.MessageBookRepository.find({
      where: {
        content: Like(`%${query.keyWord}%`)
      }
    })
  }

  remove() {
    return this.MessageBookRepository.clear();
  }

  RemoveOne(id:number) {
    return this.MessageBookRepository.delete(id)
  }
}
