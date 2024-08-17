import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private cats: Cat[];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
