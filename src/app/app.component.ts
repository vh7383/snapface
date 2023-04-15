import { Component } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // propriété injectable dans le template
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }
}
