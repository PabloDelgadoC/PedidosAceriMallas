import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Services } from '../../services/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  public url: string = 'http://localhost:4000';

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
    this._service.signUpPost(this.url+'/signup', user)
      .subscribe( async (res:any) => {
        console.log('SERVER RESPOND: ', res);
        var toast = null;
        if(res.STATUS === 'OK') {
          toast = await this.toastController.create({
            message: res.MESSAGE,
            duration: 2500,
            position: 'top',
            cssClass: 'dark-trans'
          });
          toast.present();
        }else {
          toast = await this.toastController.create({
            message: 'No se ha podido crear el usuario, intente mas tarde',
            duration: 2500,
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
