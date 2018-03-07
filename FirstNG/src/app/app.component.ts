import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemList = [
    {
      title: "something",
      body: "something else"
    },
    {
      title: "something 1",
      body: "something else 1"
    },
    {
      title: "something 2",
      body: "something else 2"
    }
  ]
  title = 'Angular App';
}
