import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { NgForm, NgModel } from '@angular/forms';
import { concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  model: Movie = {
    movieNo: 0,
    movieName: '',
    movieDescription: ''
  }
  constructor(private movieService: MovieService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  createMovie() {

    const movie = {
      movieNo:0,
      movieName:  this.model.movieName,
      movieDescription: ''
    };
  }


  cleanForm(form: NgForm){
    form.resetForm()
    this.log(this.model.movieName)
  }

  log(value : any){
    console.log(value);
  }


  
  
  
    // Bu metod içerisinde iki HTTP isteğini sırasıyla yapıyoruz
    getFirstData() {
      return this.http.get('https://api.example.com/firstData');
    }
  
    getData(param: string) :any{
      return this.getFirstData().subscribe(data => console.log(data))
    }


}
