import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,private api: ApiService) {
    this.loginForm = this.formbuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
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
      username: this.f['email'].value,
      password: this.f['password'].value
    }
    this.api.login(body).subscribe((res: any) => {
      localStorage.setItem('token',res.token);
    })
  }

}
