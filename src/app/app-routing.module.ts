import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { SidenavComponent } from './plantillas/sidenav/sidenav.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent },
  {path:'nuevo', loadChildren:()=>import('./vistas/nuevo/nuevo.module').then(a => a.NuevoModule)},
  {path:'sidenav', component:SidenavComponent},
  {path:'prueba', loadChildren:()=>import('./vistas/prueba/prueba.module').then(a => a.PruebaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent]