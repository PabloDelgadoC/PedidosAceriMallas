import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public contactenos(){
    this.router.navigate(['/tabs/locales']);
  }

  public sugerencias() {
    this.router.navigate(['/tabs/sugerencias']);
  }
}
