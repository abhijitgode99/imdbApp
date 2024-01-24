
import { Component, OnInit } from '@angular/core';
import { MmdbServiceService } from '../Services/mmdb-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieslist : any;
  prefix : string='https://image.tmdb.org/t/p/w1280';

  filterString : string =''
  constructor(private mmdbSer : MmdbServiceService,private router: Router) { 
    this.mmdbSer.search.next(this.filterString)
  }

  ngOnInit() {
   this.allMovies()

  }

  allMovies() {
    this.mmdbSer.getAllMovies().subscribe((res: any) => {
      if (res.results) {
        this.movieslist = res.results.map((movie: any) => ({
          poster_path: this.prefix + movie.poster_path,
          title: movie.title,
          vote_average: movie.vote_average,
          id:movie.id,
          overview:movie.overview,

        }));
        console.log(this.movieslist);
      }
    });
  }
  navigate(movie: any){
    this.mmdbSer.movies.next(movie.id)
    this.router.navigate(['/moviedetails'])
    console.log(movie.id);
  }
  
}