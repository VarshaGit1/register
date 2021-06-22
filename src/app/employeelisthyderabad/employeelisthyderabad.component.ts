import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelisthyderabad',
  templateUrl: './employeelisthyderabad.component.html',
  styleUrls: ['./employeelisthyderabad.component.css']
})
export class EmployeelisthyderabadComponent implements OnInit {

  employees=[  
  { id: 4, name: 'Meera', gender: 'F' ,location:"Hyderabad"}, 
  { id: 7, name: 'Tia', gender: 'F' ,location:"Hyderabad"}  
]

  constructor() { }

  ngOnInit(): void {
  }

}
