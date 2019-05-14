import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  

  public list: any ;
   public busca;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data)=>{
    this.list = data["results"];


    })
  }

  buscar(){
    if(this.busca == ""){
      this.movieService.getMovies().subscribe((data) => {this.list = data;
      })
    }
    this.list = this.list.filter(item => { 
      return item.title.toLocaleLowerCase().match(this.busca.toLocaleLowerCase());
    })
  }

}
