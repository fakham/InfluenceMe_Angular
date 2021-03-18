import { Component, OnInit, Input } from '@angular/core';
import { faClock, faUsers, faDollarSign } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-postinfo',
  templateUrl: './postinfo.component.html',
  styleUrls: ['./postinfo.component.css']
})
export class PostinfoComponent implements OnInit {

  faClock=faClock
  faUsers=faUsers
  faDollarSign=faDollarSign

  @Input() price
  @Input() time
  @Input() propositions

  constructor() { }

  ngOnInit(): void {
  }

}
