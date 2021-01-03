import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material/material.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GridComponent } from './grid/grid.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FormComponent } from './form/form.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { ScrollComponent } from './scroll/scroll.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    SpinnerComponent,
    GridComponent,
    AccordionComponent,
    FormComponent,
    DialogComponent,
    TableComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
