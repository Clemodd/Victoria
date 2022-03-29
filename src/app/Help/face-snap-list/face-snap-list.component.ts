import { Component, OnInit } from '@angular/core';
import {SnapModel} from "../models/snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: SnapModel[];
  faceSnapsServices! : SnapModel[];
  faceSnapsServicesGetAll! : SnapModel[];

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    //En passant par un service :
    this.faceSnapsServices = this.faceSnapsService.faceSnaps;

    //Par un service avec un getGetAll :
    this.faceSnapsServicesGetAll = this.faceSnapsService.getAllFaceSnaps();

    //Donnees en durees directement
    this.faceSnaps = [
      {
        id : 5,
        title : 'Jean',
        description : 'Ma photo',
        imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire2.jpg",
        createdDate : new Date(),
        snaps : 9,
        location : "Paris"
      },
      {
        id : 4,
        title : 'Jack',
        description : 'Ma photo',
        imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire1.jpg",
        createdDate : new Date(),
        snaps : 3
      },
      {
        id : 6,
        title : 'Clement',
        description : 'Ma photo',
        imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire3.jpg",
        createdDate : new Date(),
        snaps : 100,
        location :  "Nantes"
      }
    ];
  }
}
