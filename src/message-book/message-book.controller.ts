import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MessageBookService } from './message-book.service';
import { CreateMessageBookDto } from './dto/create-message-book.dto';
import { UpdateMessageBookDto } from './dto/update-message-book.dto';
import { query } from 'express';

@Controller('/message-book')
export class MessageBookController {
  constructor(private readonly messageBookService: MessageBookService) { }

  @Post('/post')
  create(@Body() createMessageBookDto: CreateMessageBookDto) {
    return this.messageBookService.create(createMessageBookDto);
  }

  @Get('/getall')
  findAll() {
    return this.messageBookService.findAll();
  }

  @Get('/search')
  Search(@Query() query: { keyWord: string }) {
    return this.messageBookService.search(query);
  }


  @Delete()
  clear() {
    return this.messageBookService.remove();
  }
}
