import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  endpoint = 'https://influenceme-api.herokuapp.com'

  constructor(private http:HttpClient) { }

  register(fullname, email, password) {
    const user = this.http.post(`${this.endpoint}/users`, {
      email:email,
      password:password
    }).subscribe(data => console.log(data))

    this.http.post(`${this.endpoint}/profiles`, {
      username:email,
      fullname:fullname
    }).subscribe(data => console.log(data))

    return user
  }

  login(email, password) {
    const user = this.http.get(`${this.endpoint}/users/${email}`)
    user.subscribe(data => {
      if (data['password'] == password) {
        localStorage.setItem('user', JSON.stringify(data))
      }
    })
  }

  profile(email) {
    return this.http.get(`${this.endpoint}/profiles/${email}`)
  }

  logout() {
    localStorage.removeItem('user')
  }
}
