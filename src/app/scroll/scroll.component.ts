import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  numbers:number[] = [];
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<1000; i++){
      this.numbers.push(i);
    };
  }

}
