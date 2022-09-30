import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymDetailsPageRoutingModule } from './gym-details-routing.module';

import { GymDetailsPage } from './gym-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymDetailsPageRoutingModule
  ],
  declarations: [GymDetailsPage]
})
export class GymDetailsPageModule {}
