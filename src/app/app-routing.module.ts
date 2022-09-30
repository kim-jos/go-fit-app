import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gym',
    loadChildren: () => import('./gym/gym.module').then((m) => m.GymPageModule),
  },
  {
    path: 'gym/:id',
    loadChildren: () =>
      import('./gym-details/gym-details.module').then(
        (m) => m.GymDetailsPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'membership-types',
    loadChildren: () =>
      import('./membership-types/membership-types.module').then(
        (m) => m.MembershipTypesPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'gym',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
