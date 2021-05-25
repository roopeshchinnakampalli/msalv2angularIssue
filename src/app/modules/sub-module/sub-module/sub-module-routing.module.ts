import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcmpComponent } from './subcmp/subcmp.component';

const routes: Routes = [
  {
    path: '',
    component: SubcmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubModuleRoutingModule {}
