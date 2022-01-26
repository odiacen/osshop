import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsshopService {

  isLoged: boolean | undefined;
  key: any;

   usuarios = [
    {username: "user1", password: "pass1", role: "user"},
    {username: "user2", password: "pass2", role: "user"},
    {username: "odiacen", password: "pass2", role: "admin"}
   ];

   categories = ["regalos", "globos", "banderines"];

   

  checkUser(cred: any, usuario: any) {
    let a;
    let check = usuario.find ((y: { username: any; }) => y.username == cred.username);
    ((check?.username == cred.username) && (check?.password == cred.password)) ? this.key = "true" : this.key = "false";
    (this.key == true) ? a = localStorage.setItem('url', "'/'") : a = localStorage.setItem('url', "'/'")
    console.log(this.isLoged, this.key, check, localStorage.getItem('url'))
     let store = localStorage.setItem('test', this.key)
     let user = localStorage.setItem('user', check.username)
     let admin = localStorage.setItem('admin', check.role)
     console.log(localStorage.getItem('test'), localStorage.getItem('user'))
   
       
  }

  setLoged() {
   
    
  }

  getLoged() {
    return localStorage.getItem('test')
    
  }

  constructor() { }
}




function datasource(datasource: any, isLoged: boolean | undefined) {
  throw new Error('Function not implemented.');
}

