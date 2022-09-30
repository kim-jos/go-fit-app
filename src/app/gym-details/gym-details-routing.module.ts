import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GymDetailsPage } from './gym-details.page';

const routes: Routes = [
  {
    path: '',
    component: GymDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymDetailsPageRoutingModule {}
