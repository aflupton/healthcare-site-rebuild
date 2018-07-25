import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BodyComponent } from './body/body.component';
import { PlanComponent } from './plan/plan.component'
import { AdminComponent }   from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'body',
    component: BodyComponent
  },
  {
    path: 'plans',
    component: PlanComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
