import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  user={
    email:"",
    login:false
  }
  myForm:FormGroup
  hide = true
  @Input()
  register:boolean=true
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private login: LoginService,
  ) { 
    
    this.myForm=this.fb.group({
      name:[""],
      phone:[""],
      email:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  registrarse(){
    console.log(this.myForm.value);
    this.user.email = this.myForm.value.email
    this.user.login = true
    this.login.disparador.emit(this.user.email)
    this.router.navigateByUrl("")
  }

  ngOnInit(): void {
  }

}
