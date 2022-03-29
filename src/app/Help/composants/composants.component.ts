import {Component, Input, OnInit} from '@angular/core';
import {SnapModel} from "../models/snap.model";

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {
  @Input() snap! : SnapModel;
  buttonText!: String;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = "👍";
  }

  onSnap(){
    if (this.buttonText == "👍"){
      this.snap.snaps++;
      this.buttonText = "👎";
    }else{
      this.snap.snaps--;
      this.buttonText = "👍";
    }
  }

}
