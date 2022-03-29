import {Component, OnInit} from '@angular/core';
import {SnapModel} from "./Help/models/snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'victoria';
  mySnap! : SnapModel;
  listMySnap! : SnapModel[];

  ngOnInit(){
    this.mySnap = new SnapModel(
      'Clement',
      'Ma photo',
      "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire3.jpg",
      new Date(),
      100,
      "Nantes"
    );
    this.listMySnap = [
      {
      title : 'Jean',
      description : 'Ma photo',
      imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire2.jpg",
      createdDate : new Date(),
      snaps : 9,
      location : "Paris"
      },
      {
        title : 'Jack',
        description : 'Ma photo',
        imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire1.jpg",
        createdDate : new Date(),
        snaps : 3
      }
    ];
  }
}
