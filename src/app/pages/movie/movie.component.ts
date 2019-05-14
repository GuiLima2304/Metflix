import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public id: number;
  public movie : object = {};
  
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.id).subscribe(res=>{
      if(res["success"]){
        this.movie = res['movie'];
      }
      else{
        alert(res['message']);
      }
    });
  }

}
