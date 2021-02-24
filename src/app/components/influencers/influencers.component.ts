import { Component, OnInit } from '@angular/core';
import influencers from "../../../assets/data/influencers.json"

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit {

  influencers = influencers

  constructor() { }

  ngOnInit(): void {
  }

}
