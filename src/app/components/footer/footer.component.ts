import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  autor: any = 'Covid-19';
  anio :number;
  constructor() { 

    this.anio = new Date().getFullYear();
  }
  ngOnInit(): void {
  }

}
