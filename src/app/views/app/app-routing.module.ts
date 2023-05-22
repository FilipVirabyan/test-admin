import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserResolverService } from 'core/services/user-resolver.service copy';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    resolve:{user:UserResolverService} ,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path:'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path:'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'reports',
        loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path:'billing',
        loadChildren: () => import('./pages/billing/billing.module').then(m => m.BillingModule)
      },
      {
        path:'inventory',
        loadChildren: () => import('./pages/inventory/inventory.module').then(m => m.InventoryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
