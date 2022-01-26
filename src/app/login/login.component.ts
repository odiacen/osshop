import { Birds } from './../backend.service';
import { Router } from '@angular/router';
import { OsshopService } from './../osshop.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    check;
    users;
    route;
    
    
   
  
  constructor(services: OsshopService, router: Router) { 
    
    this.check = services.checkUser;
    this.users = services.usuarios;
    this.route = router.navigateByUrl;
    //this.pass = services;
    
  }

  groupForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),

  });
  
  login() {
    
    let check = this.check(this.groupForm.value, this.users);
   
   

  }

 
}


