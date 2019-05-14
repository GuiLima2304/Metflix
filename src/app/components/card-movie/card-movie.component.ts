import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input() public movie;

  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  redirectMovie(id){
    this.router.navigate(['/movie', id]);
  }
}
