import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorBackGroud]'
})
export class ColorBackGroudDirective {
  possibleColors = ['darksalmon','hotpink','lightskyblue','goldenrod','peachpuff','mediumspringgreen','cornflowerblue','blanchedalmond','lightslategrey']
  @HostBinding('style.color') color!:string;
  @HostBinding('style.border-color') borderColor:string | undefined;
  @HostListener('keydown') newColor(){
    const colorPick = Math.floor(Math.random()*this.possibleColors.length)
    this.color = this.borderColor = this.possibleColors[colorPick];
    
  }
  constructor(el:ElementRef) { 
  }

}
