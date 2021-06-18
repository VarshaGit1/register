import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  

  closeModal: string="";

    constructor(private modalService:NgbModal){}

    triggerModal(content:any)
    {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res)=>{this.closeModal='Closed with:${res}';
    }, (res)=>{
      this.closeModal='Dismissed ${this.getDismissReason(res)}';
    });
    }

    private getDismissReason(reason:any): string
    {
      if(reason==ModalDismissReasons.ESC)
      {
        return 'by pressing ESC';
      }
      else if(reason==ModalDismissReasons.BACKDROP_CLICK)
      {
        return 'by clicking on a backdrop';
      }        
      else
      {
        return 'with:${reason}';
      }
    }   
    
}
