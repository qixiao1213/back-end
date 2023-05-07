import { Module } from '@nestjs/common';
import { MessageBookService } from './message-book.service';
import { MessageBookController } from './message-book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageBook } from './entities/message-book.entity';
@Module({
  imports: [ TypeOrmModule.forFeature([MessageBook])],
  controllers: [MessageBookController],
  providers: [MessageBookService]
})
export class MessageBookModule {}
