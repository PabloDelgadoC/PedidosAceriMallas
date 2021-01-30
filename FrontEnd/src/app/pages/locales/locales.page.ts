import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {

  locales: any = ['local1','local2']; 

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  seleccionar_direccion() {
    console.log('click seleccionar direccion');
    this.router.navigate(['tabs/locales/local1']);
  }

}
