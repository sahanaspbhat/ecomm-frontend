import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../app.service';
import { constants } from '../helpers/constants';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxNotificationService } from 'ngx-notification';
import { ErrorHandler } from '../helpers/error.handler';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css'],
  providers:[AppService]
})
export class SignInModalComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private errorHandler:ErrorHandler, private ngxNotificationService: NgxNotificationService, private ngxSpinnerService : NgxSpinnerService, public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private appService: AppService) { }

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
    this.appService.postJsonData(this.loginForm.value,constants.URL_PATH_LOGIN)
                   .subscribe(response => {
                    this.ngxSpinnerService.hide();
                    this.activeModal.close();
                    this.ngxNotificationService.sendMessage('Login Successful', 'success', 'top-left');               
                    console.log(response);
                    }, (error) => {
                    this.ngxSpinnerService.hide();
                    this.activeModal.dismiss();
                    this.ngxNotificationService.sendMessage(this.errorHandler.handleError(error), 'danger', 'top-left');
                    });
}

}
