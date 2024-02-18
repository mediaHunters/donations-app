import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword: boolean = false;
  constructor(private formbuilder: FormBuilder, private api: ApiService,
    private router: Router, private _snackBar: MatSnackBar) {
    this.loginForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      vovoidship: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  passwordToggle() {
    this.showPassword = !this.showPassword;
  }

  saveForm() {
    if (this.loginForm.invalid) {
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
    this.api.register(body).subscribe({
      complete: () => {

      },
      error: (err) => {
        console.log('1111111111')
        this._snackBar.open(err.error?.message ?? 'Something Went Wrong', 'OKAY', {
          duration: 3000
        });
      },
      next: (res) => {
        this._snackBar.open('Register Successfully', 'OKAY', {
          duration: 3000
        });
        this.router.navigate(['/register']);
      },
    })
    // .subscribe((res) => {
    //   this._snackBar.open('Register Successfully','OKAY', {
    //     duration: 3000
    //   });
    //   this.router.navigate(['/register']);
    // },(err) => {
    //   console.log('1111111111')
    //   this._snackBar.open(err.error?.message ?? 'Something Went Wrong','OKAY', {
    //     duration: 3000
    //   });
    // })
  }
}
