import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found-page.component.html',
})
export class NotFoundPageComponent {
  constructor(
    public title: Title
  ) {
    this.title.setTitle('Page not found');
  }
}
