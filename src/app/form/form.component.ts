import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  topic = new FormControl('');
  anotherTopic = new FormControl('');
  checkBox = new FormControl(false);
  selectedValue:string='';
  options:string[] = ['Angular','Angular Material','React','Vue'];
  // objOptions = [
  //   { name: 'Angular'},
  //   { name: 'Angular Material'},
  //   {name: 'React'},
  //   {name: 'Vue'}
  // ];
  filteredOptions:Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.anotherTopic.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    )

  }

  filter(value:string):string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  
    getErrorMessage() {
      if (this.name.hasError('required')) {
        return 'You must enter a value';
      }
  
    }

}
