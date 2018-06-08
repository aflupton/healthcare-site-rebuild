import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  subtitle = "2018 Open Enrollment is over. Still need health insurance?";
  firstName = "";
  lastName = "";

  enrollmentDate = new Date();
  month: number = this.enrollmentDate.getMonth() + 1;
  day: number = this.enrollmentDate.getDate();
  year: number = this.enrollmentDate.getFullYear();
}
