import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  isRemember: boolean;
  message_error: string;
  login_url: string = environment.baseURL + 'authen/login';

  constructor(private http: HttpClient, private router: Router) {
    this.username = '';
    this.password = '';
    this.message_error= '';
    this.isRemember = false;
  }

  ngOnInit(): void {}

  submit() {
    const body = {
      username: this.username,
      password: this.password,
    };
    this.http.post(this.login_url, body).subscribe(
      (data: any) => {
        const infomation = {
          token: data.data,
        };
        saveInformationIntoStorage(this.isRemember, infomation);
        this.router.navigate(['/home']);
        console.log("LANDING")
      },
      (error) => {
        this.message_error = "Sai thông tin đăng nhập, hãy thử lại!"
      }
    );
    console.log(
      'Username :' +
        this.username +
        ', Password :' +
        this.password +
        '\nRemember : ' +
        this.isRemember
    );
  }
}
function saveInformationIntoStorage(isRemember: boolean, information: any) {
  if (isRemember) {
    localStorage.setItem('token', information.token);
  } else {
    localStorage.removeItem('token');
    sessionStorage.setItem('token', information.token);
  }
}
