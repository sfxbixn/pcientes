import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  data:any;

  constructor(private infoUsuarios: ApiService) { }

  ngOnInit(): void {
    this.data=this.infoUsuarios.usuarioInfo;
  }

}
