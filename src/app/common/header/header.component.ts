import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropdown = true;
  avatar:string
  
  constructor(private authService:AuthenticationService, private router:Router, private profileService:ProfileService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'))
    this.profileService.getByEmail(user.email).subscribe(data => this.avatar = data['avatar'])
  }


  changeStyle($event){
    this.dropdown = !this.dropdown;
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
