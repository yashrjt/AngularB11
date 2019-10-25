import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Craete aform variable

  loginForm:FormGroup;

  //Inject form builder
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]]
    })
  }


  login(){
    console.log(JSON.stringify(this.loginForm.value));
    this.loginForm.reset();
  }

}
