import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  createUser(params){
      return this.http.post('http://wksn0378.luxfacta.com.br:8005/users/create',params);
  }
  login(params){
      return this.http.post('http://wksn0378.luxfacta.com.br:8005/users/login',params);
  }

}
