import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(authorService: AuthorService) { 
    this.authors = authorService.returnAuthors();
    this.title = "Authors";
  }

  ngOnInit() {
  }

  public title;
  public authors;
}
