import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu1',component:Menu1Component},
  {path:'menu2',component:Menu2Component},
  {path:'menu4',component:Menu3Component},
  {path:'menu4/:stname/:age',component:Menu4Component},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
