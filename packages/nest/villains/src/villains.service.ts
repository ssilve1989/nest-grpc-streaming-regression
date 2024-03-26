import { Injectable } from '@nestjs/common';

@Injectable()
export class VillainsService {
  getHello(): string {
    return 'Hello World!';
  }
}
