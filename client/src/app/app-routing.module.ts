import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) }, // Ensure this is correct
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) }, // Ensure this is correct
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksPageModule) }, // Ensure this is correct
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
