import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { TransationComponent } from './transation/transation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: "transaction", component: TransationComponent
      },
      {
        path: 'account', component: AccountComponent
      }
    ]
  }
]
//   {
//     path: 'dashboard', component: DashboardComponent
//   },
//   {
    
//   },
//   {
    
//   }
// ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
