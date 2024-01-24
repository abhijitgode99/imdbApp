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
  newarray : any=[];
  movieId;
  des :string
  constructor(private movieService: MmdbServiceService,private route : ActivatedRoute ) {
  
   }

ngOnInit() {

  this.movieService.movies.subscribe((res) => {
    this.movieId = res;
    console.log(this.movieId);

    if (this.movieId !== undefined) {
      this.movieService.getMovieDetails(this.movieId).subscribe(
        (data) => {
          this.newarray = data;
          this.des=this.newarray.overview;
          console.log(this.des);
        },
        (error) => {
          console.error('Error fetching movie details:', error);
        }
      );
    }
  });
}
}