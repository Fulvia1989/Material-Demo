import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
export class FormData {
  name: string;
  companion: string;
  checkbox: boolean;
  destination: string;
  tasks: string;
  agency: string;
  date: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  topic = new FormControl('',[Validators.required]);
  anotherTopic = new FormControl('');

  form:FormGroup;
  formData = new FormData();

  selectedValue:string='';
  options:string[] = ['NASA','ESA','ASI','JAXA','ISRO','Space X'];
  
  minDate= new Date();
  maxDate= new Date(2029,3,10);
  filteredOptions:Observable<string[]>;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.generatForm();
    this.filteredOptions = this.anotherTopic.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    )

  }
  generatForm():FormGroup{
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      companion: new FormControl('', [Validators.required]),
      checkbox: new FormControl(false),
      destination: new FormControl('', [Validators.required]),
      tasks: new FormControl(''),
      agency: new FormControl(''),
      date: new FormControl()
    })
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
    Object.keys(this.form.value).forEach(key => {
      this.formData[key]=this.form.value[key];
    });
    
    let dialogRef = this.dialog.open(DialogComponent, {data:this.formData});
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
    if (this.form.get('name').hasError('required')) {
      return 'You must enter a value';
    }

  }


}
