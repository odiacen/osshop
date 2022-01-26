import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import order from '../../assets/orders.json';
import { NgbCalendar,  NgbDate, NgbDateStruct,  NgbInputDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';



interface PEDIDO {
  id?: number;
  order_number: number,
  order_status: string,
  order_date: string,
  completed_date: string,
  order_currency: string,
  user_login: string,
  billing_postcode: string,
  billing_phone: any,
  user_email: string,
  billing_address: string,
  order_subtotal_minus_discount: number,
  products: object,
  Total_Completado?: number
}

const orders: PEDIDO[] = order;

@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  //styleUrls: ['./pedidos.component.css']
})
export class Pedidos {
  search1 = orders;
  public model: any;
  public isCollapsed = true;
  public rangoCollapsed = true;
  pick!: NgbDateStruct;
  page = 1;
  pageSize = 10;
  collectionSize: any;
  pedido!: PEDIDO[];
  orderdate = true;
  from: any;
  to: any;
  comerciales = orders.map(n => n.billing_postcode).filter((value, index, self) => self.indexOf(value) === index);
  
  groupForm = new FormGroup ({
    comercial: new FormControl(''),    
  });

  pickForm = new FormGroup ({
    init: new FormControl(''),
    fin: new FormControl(''),
  });
  
  constructor(config: NgbInputDatepickerConfig, calendar: NgbCalendar) {
    this.refreshPedidos();
      // customize default values of datepickers used by this component tree
      config.minDate = {year: 1900, month: 1, day: 1};
      config.maxDate = {year: 2099, month: 12, day: 31};
  
      // days that don't belong to current month are not visible
      config.outsideDays = 'hidden';
  
      // weekends are disabled
      //config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
  
      // setting datepicker popup to close only on click outside
      config.autoClose = 'outside';
  
      // setting datepicker popup to open above the input
      config.placement = ['bottom', 'bottom'];
    
  }

  refreshPedidos() {
    if (this.orderdate === false) {
      let y = this.search1.sort(function(a, b) {
       if (a.completed_date < b.completed_date) return -1
       if (a.completed_date > b.completed_date) return 1
       return 0
       })
      }
      this.collectionSize = this.search1.length
      this.pedido = this.search1
      .map((o, i) => ({id: i + 1, ...o}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

      //console.log (this.pickForm.value)
  }

  total() {
    let total = 0
    for (let state in this.search1) {
      if (this.search1[state].order_status === "Completado")
          total += this.search1[state].order_subtotal_minus_discount   
        }
      return total
  }

  rango1() {
    if (this.pickForm.value['fin'] === "")
            console.log("fin vacio")
    else if (this.pickForm.value['init'] === "")
        console.log("init vacio")      
    else{

      for (let x in this.pickForm.value){
      const y =  `${this.pickForm.value[x]['year']}-0${this.pickForm.value[x]['month']}-${this.pickForm.value[x]['day']}`;
      (x === "init") ? this.from = `${y} 00:00` : this.to = `${y} 23:59`
      }

      for (let z of orders){
         let per = this.search1.filter(n => (this.from < n.completed_date) && (n.completed_date < this.to))        
         this.search1 = per
                  
        }     
      }
      console.log (this.from, this.to)
    this.refreshPedidos()
  }  

  ordercom(){
    for (let x in this.groupForm.value){
       const y = this.groupForm.value[x]
      if (y === "")  
          this.search1 = orders
      else { let ordercom = order.filter(n => n.billing_postcode === y)
       this.search1 = ordercom
      }
      
     }
     this.refreshPedidos()
  }

  orderDate() { 
    this.orderdate = !this.orderdate
    if (this.orderdate === true) {
     let y = this.search1.sort(function(a, b) {
      if (a.completed_date > b.completed_date) return -1
      if (a.completed_date < b.completed_date) return 1
      return 0
      })
    }
    this.refreshPedidos() 
  }

  test(){}
}

  
