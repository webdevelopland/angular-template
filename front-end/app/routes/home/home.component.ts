import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./home.html",
  styleUrls: [ "./home.scss" ]
})
export class HomePageComponent {

  constructor(
    public title:Title
  ) {
    var f = this;
    f.title.setTitle("Angular Default");
  }

}