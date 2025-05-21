import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule'ü import edin
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialsComponent } from './materials/materials.component';

const routes: Routes = [
  { path: 'materials', component: MaterialsComponent },
  { path: 'material-detail/:id', component: MaterialDetailComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
