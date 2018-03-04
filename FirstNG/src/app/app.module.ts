import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
