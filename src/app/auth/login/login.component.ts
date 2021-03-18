import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string
  password:string

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email, this.password)
    if(localStorage.getItem('user'))
      this.router.navigate(['/home'])
  }

}
