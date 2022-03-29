import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./Help/face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./Help/landing-page/landing-page.component";
import {SingleFaceSnapComponentComponent} from "./Help/single-face-snap-component/single-face-snap-component.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'facesnaps/:id', component: SingleFaceSnapComponentComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
