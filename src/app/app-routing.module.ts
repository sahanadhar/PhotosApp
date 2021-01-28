import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PhotoListComponent
  },
  {
    path: "photos/:photoid",
    component: PhotoDetailsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
