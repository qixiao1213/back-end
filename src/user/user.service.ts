import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { log } from 'console';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    const isExist = this.UserRepository.exist({
      where: {
        email: createUserDto.email
      }
    }).then((isExist) => {            //if user never signup
      if (isExist == false) {
        let user = new User()
        user.email = createUserDto.email
        console.log(user)
        this.UserRepository.save(user)
      }
    })
  }

  findAll() {
    return this.UserRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
