import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
showSpinner:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    },5000)
  }
  log(index){
    console.log(index);
  }

}
