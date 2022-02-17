import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required)
  })

  constructor( private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }
  getUsers(){
    this.api.getUsers(this.loginForm.value.usuario).subscribe(rest => {
      if(rest.total_count!=0){
        this.api.ArrayUserInfo=rest;
        this.router.navigate(['/nuevo'])
        console.log('func')
      }else{
        console.log('Sin usuarios')
      }
        
    }, error  => {console.log('Error el en servidor')});
  }
}
