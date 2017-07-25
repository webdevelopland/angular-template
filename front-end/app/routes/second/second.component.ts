import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: "./second.html",
  styleUrls: [ "./second.scss" ]
})
export class SecondPageComponent {

  constructor(
    public title:Title
  ) {
    var f = this;
    f.title.setTitle("Second Page");
  }

}