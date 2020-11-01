import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Services } from '../../services/services';
import { Constanst } from '../../constants/constanst';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  constructor( 
    private _service: Services,
    private toastController: ToastController,
    private router: Router,
    ) { }

  public ngOnInit(): void {
  }

  public createAccount(): void {
    const user:any = {
      nombre: (document.getElementById('names') as HTMLInputElement).value,
      apellido: (document.getElementById('last-name') as HTMLInputElement).value,
      telefono: (document.getElementById('cellphone') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      direccion: (document.getElementById('address') as HTMLInputElement).value,
      contrasena: (document.getElementById('contrasena') as HTMLInputElement).value,
    };
    console.log(user);
    this._service.signUpPost(Constanst.URL+'/signup', user)
      .subscribe( async (res:any) => {
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
            message: 'No se ha podido crear el usuario, intente mas tarde',
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

  public addPhoto(): void {
  }

}
