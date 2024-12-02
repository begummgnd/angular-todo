import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';
import { NgForm } from '@angular/forms';
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

  constructor(private movieService: MovieService) {
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
    console.log(value.errors);
  }
}
