import { Component, OnInit } from '@angular/core';
import {SnapModel} from "../models/snap.model";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: SnapModel[];

  ngOnInit() {
    this.faceSnaps = [
    ];
  }
}
