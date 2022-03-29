import { Injectable } from '@angular/core';
import {SnapModel} from "../models/snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  faceSnaps: SnapModel[] = [
    {
      id : 0,
      title : 'Jean',
      description : 'Ma photo',
      imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire2.jpg",
      createdDate : new Date(),
      snaps : 9,
      location : "Paris"
    },
    {
      id : 1,
      title : 'Jack',
      description : 'Ma photo',
      imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire1.jpg",
      createdDate : new Date(),
      snaps : 3
    },
    {
      id : 2,
      title : 'Clement',
      description : 'Ma photo',
      imageUrl : "http://www.pomverte.com/images/vergers/img-verger-faits-ours-polaire3.jpg",
      createdDate : new Date(),
      snaps : 100,
      location :  "Nantes"
    }
  ];

  getAllFaceSnaps(): SnapModel[] {
    return this.faceSnaps;
  }

  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }
}
