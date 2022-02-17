import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/vistas/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://api.github.com/search/users?q=";
  ArrayUserInfo: any;

  usuarioInfo: any;
  constructor(private http:HttpClient) { 
    
  }
  
  getUsers(nameUsers:any): Observable<any>{
    return this.http.get<any>(`${this.url}${nameUsers}`);
    
  }
}
