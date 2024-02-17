import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,private api: ApiService,
    private router: Router,private _snackBar: MatSnackBar) {
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
      this._snackBar.open('Login Successfully','OKAY', {
        duration: 3000
      })
      this.router.navigate(['/products']);
    },(err) => {
      console.log(err)
      this._snackBar.open(err.error?.message ?? 'Something Went Wrong','OKAY', {
        duration: 3000
      });
    })
  }

}
