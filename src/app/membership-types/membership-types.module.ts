import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipTypesPageRoutingModule } from './membership-types-routing.module';

import { MembershipTypesPage } from './membership-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipTypesPageRoutingModule
  ],
  declarations: [MembershipTypesPage]
})
export class MembershipTypesPageModule {}
