import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PhotoListComponent,
    PhotoDetailsComponent,
    HoverDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
