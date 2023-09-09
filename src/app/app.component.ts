import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { CommonModule, NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
constructor(private user:ServiceService){
  this.getApi()
}
userData:any = ""


getApi(){
  this.user.getData().subscribe(data=>{
this.userData = data
console.log(this.userData)
  },(error)=>{console.error(error)})
}


}
