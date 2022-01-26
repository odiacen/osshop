import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rango',
  templateUrl: './rango.component.html',
  styleUrls: ['./rango.component.css']
})
export class Rango {
  public rangoCollapsed = true;
  pick!: NgbDateStruct;
  from: any;
  to: any;
  pickForm = new FormGroup ({
    init: new FormControl(''),
    fin: new FormControl(''),
  });
  
  constructor(config: NgbInputDatepickerConfig, calendar: NgbCalendar) {
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

      

     }
  }  
}
