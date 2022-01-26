import { OsshopService } from './osshop.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osshop';
  constructor (services: OsshopService, router: Router) {

    //let x = localStorage.getItem('test')
    
    //if (x === "true")
    //    router.navigateByUrl('/');

  }
}
