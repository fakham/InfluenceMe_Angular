import { Component, OnInit, Input } from '@angular/core';
import {faInstagram, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faTwitter = faTwitter

  @Input() author
  @Input() userId
  biography:string
  facebook:string
  instagram:string
  twitter:string
  avatar:string

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.getByEmail(this.userId).subscribe(data => {
      this.biography = data['biography']
      this.facebook = data['facebook']
      this.instagram = data['instagram']
      this.twitter = data['twitter']
      this.avatar = data['avatar']
    })
  }

}
