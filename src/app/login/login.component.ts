import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { alertService } from '../employeelist/employeelist.component';

@Pipe({
  name: 'remove'
})
export class RemoveanddeletePipe implements PipeTransform 
{
  transform(value: any): any 
  {
    return value.replace(/,/ , '');
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[alertService]
})
export class LoginComponent 
{ 
  fn:any;
  ln:any;
  bday:any;
  email:any;
  gender:any;
  loc:any;
  msg1:any;
  displayServiceMessage:any;
  
  removespecialcharacter(event: any)
  {   
   var k;  
   k = event.charCode; 
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 );
  }
  
  constructor(private modalService:NgbModal,private alert:alertService){}

  ngOnInit(){this.displayServiceMessage=this.alert.constructor();}

  triggerModal(content:any)
  {       
    return this.modalService.open(content);   
  }    
  
}
