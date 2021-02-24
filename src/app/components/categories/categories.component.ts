import { Component, OnInit } from '@angular/core';
import categories from "../../../assets/data/categories.json"

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = categories

  constructor() { }

  ngOnInit(): void {
  }

}
