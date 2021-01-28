import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.css"]
})
export class PhotoDetailsComponent implements OnInit {
  pic;
  name;
  msg;
  comments=[];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.photoid);
    this.pic = this.activatedRoute.snapshot.params.photoid;
  }
  displayComments(e) {
    console.log(e);
    this.comments.push(e.value);
    this.name='';
    this.msg='';
  }
}
