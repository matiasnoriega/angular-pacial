import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-404',
  template:  `
      <h1>404</h1>
      <h2>Pagina no encontrada!</h2>`,
  styleUrls:  []
})
export class Page404Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}
