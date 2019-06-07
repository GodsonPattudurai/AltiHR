import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  helpflag:boolean = false;

  ngOnInit() {
  }

  constructor() { }

  openHelp() : void{
    this.helpflag = true;
  }

  closeHelp() : void{
    this.helpflag = false;
  }
}
