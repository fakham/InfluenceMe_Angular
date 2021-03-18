import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  endpoint = 'https://influenceme-api.herokuapp.com'

  constructor(private http:HttpClient) { }

  edit(email, data) {
    console.log(data)
    return this.http.put(`${this.endpoint}/profiles/${email}`, data)
  }

  get() {
    const email = JSON.parse(localStorage.getItem('user')).email
    return this.http.get(`${this.endpoint}/profiles/${email}`)
  }

  getByEmail(email) {
    return this.http.get(`${this.endpoint}/profiles/${email}`)
  }
}
