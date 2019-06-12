import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pf-options',
  templateUrl: './pf-options.component.html',
  styleUrls: ['./pf-options.component.css']
})
export class PfOptionsComponent implements OnInit {
  isLinear = false;
  
  constructor() { }

  ngOnInit() {
  }

}
