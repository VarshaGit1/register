import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  searchText:any;
  filterData:any;
  empData = [
    { id: 1, name: 'Raj', gender: 'M' },
    { id: 2, name: 'Geeta', gender: 'F' },
    { id: 3, name: 'Sam', gender: 'M' },
    { id: 4, name: 'Meera', gender: 'F' },    
  ];  
  
  constructor(private modalService:NgbModal){    
  }

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

