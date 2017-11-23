import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  sended = false;

  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl('', [Validators.required]),
  }, this.repeatPassword);

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  repeatPassword(control: AbstractControl): ValidationErrors | null {
    const passwordValue = control.get('password').value;
    const repeatPassword = control.get('repeatPassword').value;
      if (passwordValue !== repeatPassword) {
        return {passwordMatch: true};
      }
    return null;
  }

  register() {
    this.sended = true;
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
      this.authService.login({
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      });
      this.router.navigate(['/']);
    }
  }

}
