import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { constants } from '../helpers/constants';
import { AppService } from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxNotificationService } from 'ngx-notification';
import { ErrorHandler } from '../helpers/error.handler';
@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css'],
  providers: [AppService]
})
export class SignUpModalComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  constructor(private errorHandler:ErrorHandler, private ngxNotificationService: NgxNotificationService, private ngxSpinnerService : NgxSpinnerService, public activeModal: NgbActiveModal, private formBuilder:FormBuilder, private appService : AppService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      retypemail:['',Validators.required],
      phone:['',[Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmpassword: ['',Validators.required]
    },
    {validator:[MustMatch('email','retypemail')]});
  }
  
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  get f() {return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.ngxSpinnerService.show();
    this.appService.postJsonData(this.registerForm.value,constants.URL_PATH_REGISTER)
    .subscribe(response => {
     this.ngxSpinnerService.hide();
     this.activeModal.close();
     this.ngxNotificationService.sendMessage('User Registered Successfully. Please Sign In.', 'success', 'top-left');
     console.log(response);
     }, (error) => {
       this.ngxSpinnerService.hide();
       this.activeModal.dismiss();
       this.ngxNotificationService.sendMessage(this.errorHandler.handleError(error), 'Danger', 'top-left');
     });}
}
