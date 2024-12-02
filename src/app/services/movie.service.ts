import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {

  constructor() {}

  movies: Movie [] = [
    {"movieNo":1, "movieName":"film1", "movieDescription":"deneme1"},
    {"movieNo":2, "movieName":"film2", "movieDescription":"deneme2"},
    {"movieNo":3, "movieName":"film3", "movieDescription":"deneme3"},
    {"movieNo":4, "movieName":"film4", "movieDescription":"deneme4"}
  ]

  getMovieByNo(movieNo: number): Movie | undefined {
    return this.movies.find((item) => item.movieNo === movieNo);
  }

  createMovie(movie: Movie): void {
     this.movies.push(movie);
  }

  getMovies(): Movie[] {
    return this.movies;
  }
}
