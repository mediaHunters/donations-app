import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,private api: ApiService) {
    this.loginForm = this.formbuilder.group({
      name: ['',[Validators.required]],
      surname: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      vovoidship: ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  get f(){
    return this.loginForm.controls;
  }

  saveForm() {
    if(this.loginForm.invalid) {
      return
    }
    let body = {
      name: this.f['name'].value,
      surname: this.f['surname'].value,
      phone: this.f['phone'].value,
      email: this.f['email'].value,
      vovoidship: this.f['vovoidship'].value,
      password: this.f['password'].value
    }
    this.api.register(body).subscribe((res) => {

    })
  }
}
