import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropdown = true;
  
  constructor() { }

  ngOnInit(): void {
  }


  changeStyle($event){
    this.dropdown = !this.dropdown;
  }
}
