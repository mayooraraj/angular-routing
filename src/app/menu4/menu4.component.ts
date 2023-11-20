import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.scss']
})
export class Menu4Component {

  public stname:string='';
  public age:number=0;
  constructor(public activerouter:ActivatedRoute){
    activerouter.params.subscribe((param:any)=>{
      this.stname = param.stname;
      this.age = param.age;
    })
  }

  
}
