import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
isReady:boolean = true;
dataFromChild: any;
sampleArray =[{
  name:'Poornima',age:23,gender:'Female'
},
{
  name:'Aditi',age:1,gender:'Female'
},
{
  name:'Ananthan',age:40,gender:'Male'
}];

sampleData = 'Aditi Kutta';
receivedData($event: any){
  this.dataFromChild = $event;
  // console.log(this.dataFromChild);
}
}
