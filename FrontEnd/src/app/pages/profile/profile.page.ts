import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user:any;
  public noLogin:string;

  constructor(
    private _service: Services,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('noLogin') === 'true') {
      //nothing
    }
    else {
      console.log('entra')
      this._service.getProfile('http://localhost:4000/api/profile/'+localStorage.getItem('id'))
      .subscribe( (res:any) => {
        if (res.STATUS === 'OK') {
          console.log(res);
          this.user = res.USER;
        }
        
      });
    }
    
  }

}
