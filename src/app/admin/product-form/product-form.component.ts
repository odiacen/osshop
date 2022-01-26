import { OsshopService } from './../../osshop.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  category;

  groupForm = new FormGroup ({
    title: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('')

  });
  

  CreateProductos(){
    //let productos = localStorage.setItem('productos', "init")
    let newproduct = this.groupForm.value;
    let productlist = localStorage.getItem('producto')

    console.log ("newproduct:", newproduct, "productlist:", productlist)
    if (productlist === null) {
      
      let producto = localStorage.setItem('producto', JSON.stringify({newproduct}));
      console.log (producto)
      } 
    //  let productos = localStorage.setItem('productos', newproduct)
  //    console.log ("newproduct:", newproduct, "productlist:", productlist)
    
    else {
     // y = JSON.parse(localStorage.getItem('productos'));
      let productos = [productlist, newproduct];
      let producto = localStorage.setItem('producto', 'productos')
    console.log (productos)
   }
  

   }

   
   constructor(services: OsshopService) {

    this.category = services.categories.sort();
    

   }

   test() {
     console.log (this.groupForm.value)
   }

  ngOnInit(): void {
  }

}
