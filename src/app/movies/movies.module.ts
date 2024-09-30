// movies/movie.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movies-list/movies-list.component';
import { MovieService } from './movies.services';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CategoriesModule}from'../categories/categories.module';

@NgModule({
  declarations: [
    MovieListComponent, 
  ],
  imports: [
    CommonModule, 
    FormsModule ,
    RouterModule.forRoot([]),
    CategoriesModule
  ],
  providers: [
    MovieService 
  ],
  exports: [
    MovieListComponent 
  ]
})
export class MovieModule { }
