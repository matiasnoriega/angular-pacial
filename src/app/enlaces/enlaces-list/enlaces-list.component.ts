import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import {Enlace, mock_enlaces } from '../enlaces';

/**
 * @title Community Table Componet
 */
@Component({
  selector: 'enlaces-list',
  templateUrl: './enlaces-list.component.html',
  styleUrls: ['./enlaces-list.component.css']
})
export class EnlacesListComponent implements OnInit{

  public enlaces: Array<Enlace> = [];

  constructor(){

  }

  ngOnInit(){
    // levantar de la base de datos 
    // los registros de enlaces existentes
    this.enlaces = mock_enlaces;

  }


}

