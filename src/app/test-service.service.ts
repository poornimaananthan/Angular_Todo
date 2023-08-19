import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  someValue= "FOur";
  constructor() { }

  getSomeValue(){
    return this.someValue;
  }

}
