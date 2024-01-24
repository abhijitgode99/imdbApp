import { Component, OnInit } from '@angular/core';
import { MmdbServiceService } from '../Services/mmdb-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchMovie :string;
  constructor(private movieService: MmdbServiceService) { }

  ngOnInit() {
    this.movieService.search.subscribe((res)=>{
      this.searchMovie=res;
      console.log(this.searchMovie)
  })
  }
}
