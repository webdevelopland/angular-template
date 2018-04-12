import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  hi(name: string): string {
    return 'Hi ' + name;
  }
}
