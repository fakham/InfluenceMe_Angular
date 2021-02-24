import { Component, OnInit } from '@angular/core';
import posts from "../../../assets/data/posts.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts=posts

  constructor() { }

  ngOnInit(): void {
  }

}
