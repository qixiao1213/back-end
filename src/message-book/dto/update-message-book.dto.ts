import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageBookDto } from './create-message-book.dto';

export class UpdateMessageBookDto extends PartialType(CreateMessageBookDto) {}
