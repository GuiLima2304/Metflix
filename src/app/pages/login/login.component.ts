import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  public email = this.fb.control('', [ Validators.required, Validators.email ]);
  public password = this.fb.control('', [ Validators.required ]);

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.form.invalid){
      return;
    }

    console.log(this.form.value)
    this.userService.login(this.form.value).subscribe(res=>{
      if(res["success"]){
        alert("logado com sucesso!");
        this.router.navigate(['/catalog']) ;
      }
      else{
        alert(res['message']);
      }
    });
  }
}
