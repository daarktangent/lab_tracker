import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ReceivingStationComponent } from './MyComponents/receiving-station/receiving-station.component';
import { RequestsHISComponent } from './MyComponents/requests-his/requests-his.component';
import { SampleComponent } from './MyComponents/sample/sample.component';
import {AdminComponent} from './MyComponents/admin/admin.component'
import {ConfirmDialogComponent} from './MyComponents/confirm-dialog/confirm-dialog.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'receivingStation',component:ReceivingStationComponent},
  {path:'requests',component:RequestsHISComponent},
  {path:'sample',component:SampleComponent},
  {path:'admin',component:AdminComponent},
  {path:'confirm',component:ConfirmDialogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
