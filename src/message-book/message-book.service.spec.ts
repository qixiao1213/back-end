import { Test, TestingModule } from '@nestjs/testing';
import { MessageBookService } from './message-book.service';

describe('MessageBookService', () => {
  let service: MessageBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageBookService],
    }).compile();

    service = module.get<MessageBookService>(MessageBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
