import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPage } from './reset-password.page';  // Corrected import

const routes: Routes = [
  {
    path: '',
    component: ResetPage  // Corrected component reference
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordPageRoutingModule {}
