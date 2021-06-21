import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  searchText:any;
  filterData:any;
  empData = [
    { id: 1, name: 'Raj', gender: 'M' ,location:'Mangalore'},
    { id: 2, name: 'Geeta', gender: 'F' ,location:'Chennai'},
    { id: 3, name: 'Sam', gender: 'M' ,location:'Mangalore'},
    { id: 4, name: 'Meera', gender: 'F' ,location:'Hyderabad'}, 
    { id: 5, name: 'Gopi', gender: 'F' ,location:'Chennai'}, 
    { id: 6, name: 'Rahul', gender: 'M' ,location:'Mangalore'}, 
    { id: 7, name: 'Tia', gender: 'F' ,location:'Hyderabad'},    
  ];  
  
  constructor(){}

  ngOnInit(): void {    
  }
  
  searchById(){
    if(this.searchText==null)
    {
      alert("Enter a id");
    }  
    else 
    this.filterData=this.empData.find(x=>x.id===this.searchText);    
  }
}

