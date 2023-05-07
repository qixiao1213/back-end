import { Test, TestingModule } from '@nestjs/testing';
import { MessageBookController } from './message-book.controller';
import { MessageBookService } from './message-book.service';

describe('MessageBookController', () => {
  let controller: MessageBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageBookController],
      providers: [MessageBookService],
    }).compile();

    controller = module.get<MessageBookController>(MessageBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
