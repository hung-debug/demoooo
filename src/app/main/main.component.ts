import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'Demo2';
  status: boolean = false;
  
  formLogin: FormGroup =new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  get f(){
    return this. formLogin.controls;
  }

  constructor(private router: Router) {}
  
  defaultPassword="12345";
  message:string="";
  onlogin(){
    console.log(this.formLogin.value)
    
    const password = this.formLogin.value.password;   
    if (password === this.defaultPassword) {  
      this.router.navigate(['movies']);  
    } else {  
        this.message = 'Mật khẩu sai';  
    }  
  }



}
