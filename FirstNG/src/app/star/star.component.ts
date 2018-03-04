import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  selected: boolean = true;

  constructor() { 
  }

  ngOnInit() { 
  }

  onClick() {
    console.log("before: " + this.selected)
    this.selected = !this.selected;
    console.log("after: " + this.selected)
  }

}
