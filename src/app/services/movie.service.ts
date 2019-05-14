import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  /*getMovies(){
    return this.http.get("http://wksn0378.luxfacta.com.br:8005/movies/list")
  }

  getMovie(id){
    return this.http.get("http://wksn0378.luxfacta.com.br:8005/movies/details/" + id)
  }*/

  getMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=129d92e8d3f066ffdd2b3b204cd9ae75&language=pt-br&page=1")
  }

  getMovie(id){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=129d92e8d3f066ffdd2b3b204cd9ae75&language=pt-br&page=1" + id)
  }
}
