import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Services } from '../../services/services';
import { Constanst } from '../../constants/constanst';
import { UserLogin } from '../../auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public changeEye: boolean = true;
  public showPass: boolean = false;
  public authSubject = new BehaviorSubject(false);

  constructor( 
    private _service: Services,
    public loadingController: LoadingController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public seePassword(): void {
    this.showPass = !this.showPass;
    this.changeEye = !this.changeEye;
  }

  public login(): void {
    console.log('entro a login');
    const user: UserLogin = {
      email: (document.getElementById('correo') as HTMLInputElement).value,
      contrasena: (document.getElementById('contrasena') as HTMLInputElement).value,
    };

    console.log("USER TO LOG IN: ",user);
    this._service.logInPost(Constanst.URL+'/api/login', user)
      .subscribe( async (res:any) => {
        console.log('SERVER RESPOND: ', res);
        if(res.STATUS === 'OK') {
          localStorage.setItem("ACCESS_TOKEN", res.TOKEN);
          localStorage.setItem("usuario", user.email);
          localStorage.setItem('noLogin', 'false');
          localStorage.setItem("id", res.USER._id);
          this.authSubject.next(true);
          this.router.navigate(['tabs/home']);
        }
        else {

        }
      },
      (err) => {
        console.log('ERROR TO LOGGED IN USER/DID NOT ARRIVE SERVER RESPOND: ', err);
      });
  }

  public forgotPass(): void {

  }

  public loginFacebook(): void {

  }

  public noLogin() {
    localStorage.setItem('noLogin', 'true');
  }
}
