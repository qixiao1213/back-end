import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageBookService } from './message-book.service';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';

@Controller('message-book')
export class MessageBookController {
  constructor(private readonly messageBookService: MessageBookService) {}

  @Post()
  create(@Body() createMessageBookDto: CreateMessageBookDto) {
    console.log(createMessageBookDto);
    return this.messageBookService.create(createMessageBookDto);
  }

  @Get()
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageBookService.remove(+id);
  }
}
