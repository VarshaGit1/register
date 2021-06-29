import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  filteredEmployees:any;
  message:any;
  employees=[
    { id: 1, name: 'Raj', gender: 'M' ,location:'Mangalore'},
    { id: 2, name: 'Geeta', gender: 'F' ,location:'Chennai'},
    { id: 3, name: 'Sam', gender: 'M' ,location:'Mangalore'},
    { id: 4, name: 'Meera', gender: 'F' ,location:'Hyderabad'}, 
    { id: 5, name: 'Gopi', gender: 'F' ,location:'Chennai'}, 
    { id: 6, name: 'Rahul', gender: 'M' ,location:'Mangalore'}, 
    { id: 7, name: 'Tia', gender: 'F' ,location:'Hyderabad'}  
  ];  

  constructor(){ }
  ngOnInit(): void{}

  mangalorefunction()
  {
    var m="Mangalore";
    this.filteredEmployees=this.employees.filter(x=>x.location===m);
  }

  hyderabadfunction()
  {
    var m="Hyderabad";
    this.filteredEmployees=this.employees.filter(x=>x.location===m);
  }

  chennaifunction()
  {
    var m="Chennai";
    this.filteredEmployees=this.employees.filter(x=>x.location===m);
  }
  
  receiveMessage($event: string){
    this.message=$event;
  } 
}
