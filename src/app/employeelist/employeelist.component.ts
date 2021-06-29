import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()   
export class alertService
{
  constructor()   
  {   
    alert('Sample service message');   
  } 
}

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit 
{
  @Input() filteredData:any;
  @Output() messageEvent=new EventEmitter<string>();
  message:string="Verified!";

  ngOnInit(): void {}

  sendMessage()
  {
    this.messageEvent.emit(this.message);
  }
}  