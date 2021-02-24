import { Component, OnInit } from '@angular/core';
import { faBriefcase, faUniversity, faMapMarker } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faBriefcase = faBriefcase
  faUniversity = faUniversity
  faMapMarker = faMapMarker

  constructor() { }

  ngOnInit(): void {
  }

}
