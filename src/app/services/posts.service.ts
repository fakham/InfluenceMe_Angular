import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  endpoint = 'https://influenceme-api.herokuapp.com'

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(`${this.endpoint}/posts`)
  }

  getPostById(id:number) {
    return this.http.get<any[]>(`${this.endpoint}/posts/${id}`)
  }

  addPost(post) {
    return this.http.post(`${this.endpoint}/posts`, post)
  }
}
