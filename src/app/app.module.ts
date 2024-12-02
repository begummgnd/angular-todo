import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [   // component
    AppComponent,
    MoviesComponent    ],
  imports: [        // module
    BrowserModule,
    FormsModule,
    AppRoutingModule ],
  providers: [
    AlertifyService
  ],    // services
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
