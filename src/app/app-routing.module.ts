import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserManagementComponent } from './landing-page/user-management/user-management.component';
import { PermissionPageComponent } from './landing-page/permission-page/permission-page.component';
import { ProductPageComponent } from './landing-page/product-page/product-page.component';
import { TaskPageComponent } from './landing-page/task-page/task-page.component';
import { SystemPageComponent } from './landing-page/system-page/system-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'home',
    component: LandingPageComponent,
    children: [
      { path: 'product-management', component: ProductPageComponent },
      { path: 'user-management', component: UserManagementComponent },
      { path: 'permission-management', component: PermissionPageComponent },
      { path: 'task-management', component: TaskPageComponent },
      { path: 'system-management', component: SystemPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
