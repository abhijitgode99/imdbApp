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
  newarray : any;
  movieId;


  constructor(private movieService: MmdbServiceService,private route : ActivatedRoute ) {
      this.route.params.subscribe((res:any)=>{
          this.loadmoviedetails(res.id)
      })
   }

   loadmoviedetails(id : any ){
      this.movieService.getMovieDetails(id).subscribe((res)=>{
        console.log(res);
          this.newarray=res;
      })
   }
   getFullPosterPath(posterPath: string): string {
    const prefix = 'https://image.tmdb.org/t/p/w1280'; 
    if (posterPath) {
      return `${prefix}/${posterPath}`;
    } else {
      return 'path_to_default_image';
    }
  }


ngOnInit() {

}
}