import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./home.html"
})
export class HomePageComponent {

  constructor(
    public title:Title
  ) {
    var f = this;
    f.title.setTitle("Angular Default");
  }

}