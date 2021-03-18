import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullname:string
  email:string
  password:string

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.authService.register(this.fullname, this.email, this.password))
      this.router.navigate(['/login'])
  }

}
