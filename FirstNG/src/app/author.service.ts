import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  returnAuthors = function() {
    return [
      'author1',
      'author2',
      'author3'
    ]
  }

}
