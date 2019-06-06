import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('isLogin') !== null && localStorage.getItem('isLogin') !== '') {
      this.router.navigate(['/app/welcome']);
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        localStorage.setItem('isLogin', JSON.stringify(userData));
        localStorage.setItem('loginTime', new Date().toString());
        this.router.navigate(['/app/welcome']);
      });
  }

}
