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

  ngOnInit(){
  }
}
