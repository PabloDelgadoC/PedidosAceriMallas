import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public changeEye: boolean = true;
  public showPass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public seePassword(): void {
    this.showPass = !this.showPass;
    this.changeEye = !this.changeEye;
  }

  public login():void {
    console.log('entro a login');
  }

  public forgotPass(): void {

  }

  public loginFacebook(): void {

  }

  public register(): void {
    console.log('click en register para crear una cuenta');
  }
}
