import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelistchennai',
  templateUrl: './employeelistchennai.component.html',
  styleUrls: ['./employeelistchennai.component.css']
})
export class EmployeelistchennaiComponent implements OnInit {

  employees=[
  { id: 2, name: 'Geeta', gender: 'F' ,location:"Chennai"}, 
  { id: 5, name: 'Gopi', gender: 'F' ,location:"Chennai"}  
]

  constructor() { }

  ngOnInit(): void {
  }

}
