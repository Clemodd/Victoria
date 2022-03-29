import {Component, Input, OnInit} from '@angular/core';
import {SnapModel} from "../models/snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {
  @Input() snap! : SnapModel;
  buttonText!: String;

  constructor(private faceSnapService : FaceSnapsService) { }

  ngOnInit(): void {
    this.buttonText = "👍";
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
