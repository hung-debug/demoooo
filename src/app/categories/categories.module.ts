import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesListcomponent } from './categories-list/categories-list.component';

@NgModule({
  declarations:[
    CategoriesListcomponent
  ],
  imports: [
    CommonModule,          
    ReactiveFormsModule      
  ],
  exports: [CategoriesListcomponent] 
})
export class CategoriesModule {}
