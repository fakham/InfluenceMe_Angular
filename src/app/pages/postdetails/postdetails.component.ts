import { Component, OnInit } from '@angular/core';
import {faInstagram, faFacebook, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faTwitter = faTwitter
  faLinkedinIn = faLinkedinIn

  constructor() { }

  ngOnInit(): void {
  }

}
