import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;



  public email = this.fb.control('', [ Validators.required, Validators.email ]);
  public password = this.fb.control('', [ Validators.required ]);
  public name = this.fb.control('', [ Validators.required]);
  public nickName = this.fb.control('', [ Validators.required ]);

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 


    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      name: this.name,
      nickName: this.nickName
    })


  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.form.invalid){
      return;
    }
    console.log(this.form.value)
    this.userService.createUser(this.form.value).subscribe(res=>{

      if(res["success"]){
        alert("cadastrado com sucesso!")
        this.router.navigate(['/login']) 
      }
      else{
        alert("ocorreu um erro!")
      }
    });
  }

}
