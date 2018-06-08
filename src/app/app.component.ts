import { Component } from '@angular/core';
import { Site } from './models/site.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterSite: Site[] = [

  ];
  selectedSite = null;
  newSite: Site [] = null;
  showForm = null;
  editSite(clickedSite) {
    this.selectedSite = clickedSite;
  };
  finishedEditing() {
    this.selectedSite = null;
  };
  addSite(newSite: Site) {
    this.showForm = newSite;
    this.masterSite.push(newSite);
    this.newSite = [];
    this.showForm = null;
  };
  finishedAdding(clickedSite) {

  };
}
