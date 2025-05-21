import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsComponent } from './materials/materials.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [   // component
    AppComponent,
    MoviesComponent,
    MaterialsComponent,
    MaterialDetailComponent    ],
  imports: [        // module
    BrowserModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    AppRoutingModule ],
  providers: [
    AlertifyService
  ],    // services
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }
