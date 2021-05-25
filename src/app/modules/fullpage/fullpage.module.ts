import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FullpageRoutingModule } from './fullpage-routing.module';
import { Cmp1Component } from './components/cmp1/cmp1.component';


@NgModule({
  imports: [
    CommonModule,
    FullpageRoutingModule,
  ],
  declarations: [HomeComponent, Cmp1Component],
  providers: []
})
export class FullpageModule { }
