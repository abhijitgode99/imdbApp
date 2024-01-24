import { Component, OnInit } from '@angular/core';
import { MmdbServiceService } from './Services/mmdb-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

  
  constructor(private movieService : MmdbServiceService){

    
  }
  ngOnInit(): void {  
  }
  
  title = 'imdbApp';
  
  // serachdata(serach){
  //   return 
  // }
 
}
