import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  countUsers:any

  constructor(private users: ApiService, private usuarioU:Router) { }

  ngOnInit(): void {
    this.countUsers=this.users.ArrayUserInfo;
  }
  goUsuario(login:any){
    this.users.usuarioInfo=login
    this.usuarioU.navigate([`/prueba/${login.login}`])
  }
}
