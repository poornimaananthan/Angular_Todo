import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  @ViewChildren("el", { read: ElementRef }) children: QueryList<ElementRef> | undefined;
  
  ngAfterViewChecked(){
    // console.log("Logging",this.children)
  }
  changeColor(){
    
  }
}
