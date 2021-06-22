import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  
  constructor(private modalService:NgbModal){}

  triggerModal(content:any)
  {       
    return this.modalService.open(content);   
  }    
  
}
