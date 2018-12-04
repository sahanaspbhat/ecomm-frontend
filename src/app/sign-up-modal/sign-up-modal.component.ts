import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {
  registerForm:FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private formBuilder:FormBuilder) { }

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
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
