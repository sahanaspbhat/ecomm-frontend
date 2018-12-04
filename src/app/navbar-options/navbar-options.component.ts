import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from '../sign-up-modal/sign-up-modal.component';

@Component({
  selector: 'app-navbar-options',
  templateUrl: './navbar-options.component.html',
  styleUrls: ['./navbar-options.component.css'],
  providers: []
})
export class NavbarOptionsComponent implements OnInit {
 

  constructor(public ngbModalService:NgbModal) { }

  ngOnInit() {
  }

  openSignInModal() {
    const modalRef = this.ngbModalService.open(SignInModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    return true;
  }

  openSignUpModal() {
    const modalRef = this.ngbModalService.open(SignUpModalComponent);
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

    return true;
  }

 
}

