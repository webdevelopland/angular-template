import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(
    public title: Title
  ) {
    this.title.setTitle('my_project_title');
  }
}
