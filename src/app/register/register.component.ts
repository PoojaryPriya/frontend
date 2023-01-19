import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any={};

  constructor(private accountService:AccountService) {}
  ngOnInit() {
  }
  
  register(){
    this.accountService.register(this.model).subscribe({
      next:response=>{
        console.log(response)
        
      },
      error:error=>console.log(error)

    })
  }

  

}

// this.registerForm = this.formBuilder.group({
//   email: ['', [Validators.required, Validators.email]],
//   password: ['', [Validators.required, Validators.minLength(6)]],
//   firstname: ['', [Validators.required, Validators.minLength(6)]],
//   mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
// });

// showModal: boolean;
//   registerForm: FormGroup;
//   submitted = false;
//   constructor(private formBuilder: FormBuilder) { }
//   show() {
//     this.showModal = true; // Show-Hide Modal Check

//   }
//   //Bootstrap Modal Close event
//   hide() {
//     this.showModal = false;
//   }/

// get f() { return this.registerForm.controls; }
//   onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//       return;
//     }
//     if (this.submitted) {
//       this.showModal = false;
//     }

//   }