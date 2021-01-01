import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
displaySize:number;
heading: string='';
style:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
