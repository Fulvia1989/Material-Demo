import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  topic = new FormControl('',[Validators.required]);
  anotherTopic = new FormControl('');

  checkBox = new FormControl(false);
  selectedValue:string='';
  options:string[] = ['NASA','ESA','ASI','JAXA','ISRO','Space X'];
  
  minDate= new Date();
  maxDate= new Date(2029,3,10);
  filteredOptions:Observable<string[]>;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.filteredOptions = this.anotherTopic.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    )

  }
  openSnackBar(message, action){
    let snackBarRef = this.snackBar.open(message,action, {duration:3000});
    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The snackbar was dismissed');
    }); 
    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar was triggered');
    })
  }
  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent, {data:{name:'Angular Material'}});
    dialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  filter(value:string):string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  datefilter = date => {
    const day = date.getDay();
    return day!==0 && day !==6;
  }
  
  
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

  }


}
