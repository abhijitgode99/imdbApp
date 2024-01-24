import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MmdbServiceService } from '../Services/mmdb-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie : any;
  constructor(private activate: ActivatedRoute,private movieService: MmdbServiceService,private route : ActivatedRoute ) {
    // this.activate.params.subscribe((res:any)=>{
    //   console.log(res); 
    // })
   }

  ngOnInit() {
 
  // const movieId = this.route.snapshot.params['id'];

  // this.movieService.getMovieDetails(movieId).subscribe(
  //   (data) => {
  //     this.movieDetails = data;
  //   },
  //   (error) => {
  //     console.error('Error fetching movie details:', error);
  //   }
  // );
  this.movieService.movies.subscribe((res) => {
    this.selectedMovie = res;
    console.log(this.selectedMovie)
})
}
}
