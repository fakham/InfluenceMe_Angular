import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() date:string
  @Input() tag:string
  @Input() title:string
  @Input() content:string
  @Input() author:string
  @Input() avatar:string

  constructor() { }

  ngOnInit(): void {
  }

}
