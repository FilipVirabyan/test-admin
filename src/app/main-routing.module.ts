import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'core/guards';

const routes: Routes = [
      {
        path: 'auth',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        canActivate: [LoggedInGuard],
        loadChildren: () => import('./views/app/app.module').then(m => m.AppModule)
      },
      {
        path: '**',
        redirectTo: ''
      },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
