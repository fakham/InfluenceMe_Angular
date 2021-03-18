import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Array<any>

  constructor(private postsService:PostsService, private router:Router, private profileService:ProfileService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user'))
      this.router.navigate(['/login'])

    this.posts = new Array()

    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      data => {
        data.forEach(post => {
          this.profileService.getByEmail(post.userId).subscribe(data => post.avatar = data['avatar'])
          this.posts.push(post)
        })
        
      },
      erros => console.log(erros),
      () => console.log('posts retrieved')
    )
  }

}
