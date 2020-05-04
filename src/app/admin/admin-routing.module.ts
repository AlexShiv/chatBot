import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../pages/services/auth.guard';


const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [
        {
          path: 'charts',
          loadChildren: () => import('./charts/charts.module')
            .then(m => m.ChartsModule),
        },
        {
          path: 'tables',
          loadChildren: () => import('./tables/tables.module')
            .then(m => m.TablesModule),
        },
        {
          path: '',
              redirectTo: '',
          canActivate: [AuthGuard],
              pathMatch: 'full',
        },
      // { path: '**', redirectTo: 'admin' },
    ],
  // path: '',
  // component: AdminComponent,
  // children: [
  //   {
  //     path: 'charts',
  //     loadChildren: () => import('./charts/charts.module')
  //       .then(m => m.ChartsModule),
  //   },
  //   {
  //     path: 'tables',
  //     loadChildren: () => import('./tables/tables.module')
  //       .then(m => m.TablesModule),
  //   },
  //   {
  //     path: '',
  //     redirectTo: 'admin',
  //     pathMatch: 'full',
  //   },
  // ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
