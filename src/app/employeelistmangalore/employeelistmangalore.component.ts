import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelistmangalore',
  templateUrl: './employeelistmangalore.component.html',
  styleUrls: ['./employeelistmangalore.component.css']
})
export class EmployeelistmangaloreComponent implements OnInit {

  employees=[
    { id: 1, name: 'Raj', gender: 'M' ,location:"Mangalore"},    
    { id: 3, name: 'Sam', gender: 'M' ,location:"Mangalore"},    
    { id: 6, name: 'Rahul', gender: 'M' ,location:"Mangalore"}
]

  constructor() { }

  ngOnInit(): void{
  }

    

  

  

}
