import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.css"]
})
export class PhotoListComponent implements OnInit {
  array = [];
  constructor(private http: HttpClient, private router: Router) {}

  getPhoto() {
    // a = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(4);
    //   }, 6000);
    // });
    //a.then(a=>a*10).then(a=>console.log(a));

    return this.http
      .get(`https://aws.random.cat/meow`)
      .subscribe((data: any) => {
        this.array.push(data.file);
        //        console.log(data.file);
      });
  }
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.getPhoto();
    }

    //observable//
    const o = new Observable(sub => {
      sub.next(5);
      sub.next(6);
      sub.next(7);
      sub.complete();
    });
    o.pipe(map((d: number) => d * 10)).subscribe(data => console.log(data));
  }
  displayName(caturl) {
    console.log(caturl);
    //console.log(this.pokemon.name);
    this.router.navigate(["/", "photos", caturl]);
  }
}
