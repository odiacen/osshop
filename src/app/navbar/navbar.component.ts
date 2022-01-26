import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OsshopService } from '../osshop.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
 state () {
   let x = localStorage.getItem('test')
    if (x === "true")
      return true

    return false
 }

 user () {
  if (this.state() == true)
    return localStorage.getItem('user')
  
  return "username";

 }

 admin () {
   let x = localStorage.getItem('admin')
    if (x === "admin")
      return true

    return false

 }

 
  constructor(services: OsshopService) {
    
       
  }

  logout() {
    let store = localStorage.setItem('test', "false")
    console.log(localStorage.getItem('test'), "login out");
  }

  test() {
    console.log("home", localStorage.getItem('test'));
  }

}


