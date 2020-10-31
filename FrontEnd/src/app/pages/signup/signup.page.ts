import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public url: string = 'http://localhost:4000';

  constructor( 
    private service: Services,
    ) { }

  public ngOnInit(): void {
  }

  public createAccount(): void {
    let user = {
      nombre: (document.getElementById('names') as HTMLInputElement).value,
      apellido: (document.getElementById('last-name') as HTMLInputElement).value,
      telefono: (document.getElementById('cellphone') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      direccion: (document.getElementById('address') as HTMLInputElement).value,
      contrasena: (document.getElementById('password') as HTMLInputElement).value,
    }
    console.log(user);
    this.service.signIn(this.url+'/signup', user)
      .subscribe( (res) => {
        console.log('Respuesta del servidor: ', res);
      },
      (err) => {
        console.log('ERROR AL CREAR NUEVO USUARIO/NO LLEGO LA RESPONSE DEL SERVER: ', err);
      });

  }

  public addPhoto(): void {
  }

}
