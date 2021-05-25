import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from './components/cmp1/cmp1.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cmp1',
        component: Cmp1Component
      },
      {
        path: 'mod1',
        loadChildren: () => import('./../sub-module/sub-module/sub-module.module').then(m => m.SubModuleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullpageRoutingModule {}
