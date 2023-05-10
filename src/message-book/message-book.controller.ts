import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageBookService } from './message-book.service';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';

@Controller('/message-book')
export class MessageBookController {
  constructor(private readonly messageBookService: MessageBookService) {}

  @Post('/post')
  create(@Body() createMessageBookDto: CreateMessageBookDto) {
    return this.messageBookService.create(createMessageBookDto);
  }

  @Get('/getall')
  findAll() {
    return this.messageBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageBookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageBookDto: UpdateMessageBookDto) {
    return this.messageBookService.update(+id, updateMessageBookDto);
  }

  @Delete()
  clear() {
    return this.messageBookService.remove();
  }
}
