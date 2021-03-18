import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  visible: boolean = false;
  title:string
  content=''
  price:number
  time:number
  tag:string
  propositions=0
  date=new Date()

  constructor(private postsService:PostsService, private profile:ProfileService) { }

  ngOnInit(): void {
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  addPost() {
    this.profile.get().subscribe(data => {
      
      const post = {
        title:this.title,
        content:this.content,
        tag:this.tag,
        price:this.price,
        time:this.time,
        propositions:this.propositions,
        date:this.date,
        author:data['fullname'],
        userId:data['username']
      }

      this.postsService.addPost(post).subscribe(
        data => console.log(data),
        error => console.log(error),
        () => {
          this.hide()
          alert("Post created successfully.")
          location.reload()
        }
        
      )
    })

    
  }

}
