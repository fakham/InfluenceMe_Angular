import { Component, OnInit } from '@angular/core';
import {faInstagram, faFacebook, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faTwitter = faTwitter
  faLinkedinIn = faLinkedinIn

  constructor() { }

  ngOnInit(): void {
  }

}
