import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './second.html'
})
export class SecondPageComponent {
  constructor(
    public title: Title
  ) {
    this.title.setTitle("Second Page");
  }
}