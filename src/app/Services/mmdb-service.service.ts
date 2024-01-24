import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MmdbServiceService {
  searchMovie(searchQuery: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private  http:HttpClient ) { }
  movies = new Subject<any>();
  search = new Subject<any>();

  private apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
  private baseUrl = 'https://api.themoviedb.org/3';


  getAllMovies(){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
    // return this.http.get(`https://api.themoviedb.org/3/${movieId}/?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US`)
  }

  searchMovies(searchQuery: string): Observable<any> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
    return this.http.get(url);
  }


}
