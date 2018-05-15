import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterLink, } from '@angular/router';
import { Router } from '@angular/router';
import {  MaterialModule } from '../../src/modules/angular-materials';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent} ,
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes),
        MaterialModule,
  
    ],
    exports: [RouterModule,MaterialModule]
  })


  export class AppRoutingModule { }
