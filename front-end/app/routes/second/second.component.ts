import { Component, AfterContentInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "/app/routes/second/second.html"
})
export class SecondPageComponent implements AfterContentInit {

  constructor(
    public title:Title
  ) {
    var f = this;
    f.title.setTitle("Second Page");
    
  }

  ngAfterContentInit() {
    var f = this;

  }

}