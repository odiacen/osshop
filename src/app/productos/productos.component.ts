
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import BirdsJason from '../../assets/birds.json';


export interface Birds{
  ID: string,
  Name: string,
  Type: string,
  ScientificName: string
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

   Birds = BirdsJason;

   add = { ID: "004", Name: "Cooper's Hawk", Type: "Hawk Test",  ScientificName: "Oscar"  }

   extend = Object.assign(this.Birds, this.add)
   ar = this.Birds.push(this.add);

  constructor () {


   }
  
  ngOnInit () {
      }

  showBirds(){
    console.log(this.Birds)
    
  }

  test() {
    
    console.log(this.Birds, this.ar)
    let json = JSON.stringify(this.Birds)
   // var fs = this.newMethod();
    //fs.writeFile('myjsonfile.json', json, 'utf8', callback);

  }


  
}


