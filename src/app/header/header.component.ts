import { Component, OnInit } from '@angular/core';
import { Site } from '../models/site.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'HealthCare.gov';
  subtitle = "2018 Open Enrollment is over. Still need health insurance?";

}
