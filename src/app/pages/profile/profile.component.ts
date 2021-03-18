import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBriefcase, faUniversity, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faBriefcase = faBriefcase
  faUniversity = faUniversity
  faMapMarker = faMapMarker
  faInstagram = faInstagram
  faFacebook = faFacebook
  faTwitter = faTwitter

  fullname:string
  biography:string
  facebook:string
  instagram:string
  twitter:string
  avatar:string

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user'))
      this.router.navigate(['/login'])

    const user = JSON.parse(localStorage.getItem('user'))
    this.authService.profile(user.email).subscribe(data => {
      this.fullname = data['fullname']
      this.biography = data['biography']
      this.facebook = data['facebook']
      this.instagram = data['instagram']
      this.twitter = data['twitter']
      this.avatar = data['avatar']
    })
  }

}
