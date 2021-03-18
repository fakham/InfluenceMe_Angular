import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faInstagram, faFacebook, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faTwitter = faTwitter
  faLinkedinIn = faLinkedinIn

  post

  constructor(private route:ActivatedRoute, private postsService:PostsService, private router:Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user'))
      this.router.navigate(['/login'])

    this.getPost(parseInt(this.route.snapshot.paramMap.get('id')))
  }

  getPost(id:number) {
    this.postsService.getPostById(id).subscribe(
      data => {
        this.post = data
      },
      erros => console.log(erros),
      () => console.log('post retrieved')
    )
  }

}
