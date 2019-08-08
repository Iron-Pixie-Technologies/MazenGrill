import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  bar = false;
  change = false;
  makechange = true;
  constructor() { }
  
  showit(){
    this.bar = !this.bar;
  }
  changeToTrue(){
    this.change = true;
    this.makechange = false;
  }
  changeToFalse(){
    this.makechange = true;
    this.change = false;
  }

 

  ngOnInit() {
    
    if(window.location.href.slice(-1) === "u")
    {
      this.change = true;
      this.makechange = false;
    }
    else{
      this.makechange = true;
      this.change = false;
    }

  }

}
