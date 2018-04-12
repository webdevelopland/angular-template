import { Component } from '@angular/core';

import { HelloService } from './hello.service';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  providers: [HelloService],
})
export class HelloComponent {
  name: string = 'World';

  constructor(
    private helloService: HelloService
  ) { }

  hi(): void {
    console.log(this.helloService.hi(this.name));
  }
}
