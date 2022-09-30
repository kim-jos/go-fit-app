import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipTypesPage } from './membership-types.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipTypesPageRoutingModule {}
