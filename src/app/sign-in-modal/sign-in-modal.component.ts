import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppSecureService} from '../app-secure.service';
import { constants } from '../helpers/constants';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
  providers:[AppSecureService]
})
export class SignInModalComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private appService: AppSecureService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.appService.postJsonDataSecure(this.loginForm.value,constants.URL_PATH_LOGIN)
                   .subscribe(response => {
                    console.log(response);
                    }, (error) => {
                    console.log(error);
                    });
}

}
