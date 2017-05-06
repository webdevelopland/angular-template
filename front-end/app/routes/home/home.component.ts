import { Component, AfterContentInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: "/app/routes/home/home.html"
})
export class HomePageComponent implements AfterContentInit {
  constructor(
    public title:Title,
  ) {
    var f = this;
    f.title.setTitle("Angular Default");
  }
  ngAfterContentInit() {
    var f = this;
    
    //
  }
}