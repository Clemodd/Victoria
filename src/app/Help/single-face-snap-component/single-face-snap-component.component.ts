import {Component, OnInit} from '@angular/core';
import {SnapModel} from "../models/snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent implements OnInit {
  snap! : SnapModel;
  buttonText!: String;

  constructor(private faceSnapService : FaceSnapsService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = "👍";
    const snapId = +this.route.snapshot.params['id'];
    this.snap = this.faceSnapService.snapFaceSnapById(snapId);
  }

  onSnap(){
    if (this.buttonText == "👍"){
      //Va marcher seulement pour les services
      this.faceSnapService.snapFaceSnapById(this.snap.id);
      this.buttonText = "👎";
    }else{
      this.snap.snaps--;
      this.buttonText = "👍";
    }
  }

}
