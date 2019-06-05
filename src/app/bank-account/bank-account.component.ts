import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  displayedColumns: string[] = ['emp_id', 'name', 'account_number', 'ifsc'];
  dataSource = new MatTableDataSource<BankElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit() {
  }

}

export interface BankElement {
  name: string;
  ifsc: string;
  emp_id: number;
  account_number: number;
}

const ELEMENT_DATA: BankElement[] = [
  {emp_id: 1, name: 'HDFC', account_number: 10079, ifsc: 'H'}
]