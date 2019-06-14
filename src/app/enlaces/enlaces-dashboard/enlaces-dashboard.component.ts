import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';

/**
 * @title Community Table Componet
 */
@Component({
  selector: 'enlaces-dashboard',
  template:  `
      <h3>Enlaces Dashboard</h3>
      <enlaces-list></enlaces-list>
      `,
  
  styleUrls: []
})
export class EnlacesDashboardComponent implements OnInit{


  constructor(){

  }

  ngOnInit(){
    // levantar de la base de datos 
    // los registros de enlaces existentes
  }


}

