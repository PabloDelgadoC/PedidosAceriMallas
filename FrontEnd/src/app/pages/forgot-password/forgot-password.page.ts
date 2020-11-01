import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Services } from '../../services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private _service: Services,
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public forgotPassword(): void {
    const email: any = {
      email: (document.getElementById('email') as HTMLInputElement).value
    };
    this._service.passwordPatch(Constanst.URL+'/forgot-password', email)
      .subscribe(async (res:any) => {
        console.log('SERVER RESPOND: ', res);
        var toast = null;
        if(res.STATUS === 'OK') {
          toast = await this.toastController.create({
            message: res.MESSAGE,
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans'
          });
          toast.present();
        }else {
          toast = await this.toastController.create({
            message: 'No se ha podido enviar el correo, intente mas tarde',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans'
          });
          toast.present();
        }
        this.router.navigate(['login']);
      },
      (err) => {
        console.log('ERROR TO CREATE NEW USER/DID NOT ARRIVE SERVER RESPOND: ', err);
      });
  }
}
