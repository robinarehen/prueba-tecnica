import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logout();
  }

  login(userName: any, userPassword: any) {
    this.loading = true;
    this.loginService.getToken(userName.value, userPassword.value)
      .then(data => {
        this.loginService.saveToken(data);
        this.router.navigateByUrl('pages/home');
      }).catch(error => {
        console.log(error.status);
      }).finally( () => {
        this.loading = false;
      });
  }

  logout() {
    this.loginService.deleteToken();
  }

}
