import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const SHARED_FORMS_MODULES = [FormsModule, ReactiveFormsModule];

// Components
import { TituloComponent } from './titulo/titulo.component';

const SHARED_COMPONENTS = [
  TituloComponent,
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [
    CommonModule,
    SHARED_FORMS_MODULES
  ],
  exports: [SHARED_COMPONENTS, SHARED_FORMS_MODULES],
})
export class SharedModule { }
