import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements root {
  name: string='Aman';
  age:number=26;
}

export interface root{
  name:string;
  age:number;
}