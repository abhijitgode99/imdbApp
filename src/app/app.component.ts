import { Component, OnInit } from '@angular/core';
import { MmdbServiceService } from './Services/mmdb-service.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
//  movielist : any=[];

  //  serachForm:FormGroup=new FormGroup({
  //    serach:new FormControl('')
  //  })
  // constructor(private movieService : MmdbServiceService){
  //     this.movieService.searchMovies('serach').valueChanges.
  //     pipe(
  //       switchMap(())
  //     ).subscribe(
  //       (v)=>{
  //         this.movielist =
  //       }
  //     )
  // }
  ngOnInit(): void {  
  }
  
  title = 'imdbApp';
  
  // serachdata(serach){
  //   return 
  // }
 
}
