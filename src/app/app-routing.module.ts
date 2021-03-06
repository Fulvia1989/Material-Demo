import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';


const routes: Routes = [
  {path:'', redirectTo:'typography', pathMatch:'full'},
  {path: 'typography', component: TypographyComponent},
  {path: 'buttons', component:ButtonsComponent},
  {path:'spinners', component:SpinnerComponent},
  {path:'grid', component: GridComponent},
  {path:'accordion', component:AccordionComponent},
  {path:'form', component:FormComponent},
  {path:'table', component:TableComponent},
  {path:'scroll', component:ScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
