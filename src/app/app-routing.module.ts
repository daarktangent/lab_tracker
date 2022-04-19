import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';
import { ReceivingStationComponent } from './MyComponents/receiving-station/receiving-station.component';
import { RequestsHISComponent } from './MyComponents/requests-his/requests-his.component';
import { SampleComponent } from './MyComponents/sample/sample.component';
import {AdminComponent} from './MyComponents/admin/admin.component'
import {ConfirmDialogComponent} from './MyComponents/confirm-dialog/confirm-dialog.component';
import { PendingSamplesComponent } from './MyComponents/pending-samples/pending-samples.component';
import { GrossingStationComponent } from './MyComponents/grossing-station/grossing-station.component';
import { ExternalPatientComponent } from './MyComponents/external-patient/external-patient.component';
import { VerificationComponent } from './MyComponents/verification/verification.component';
import { DispatchComponent } from './MyComponents/dispatch/dispatch.component';
import { PendingPatientsComponent } from './MyComponents/pending-patients/pending-patients.component';
import { PendingPatientsDispatchComponent } from './MyComponents/pending-patients-dispatch/pending-patients-dispatch.component';
const routes: Routes = [
  //{path:'',component:LoginComponent},
  {path:'receivingStation',component:ReceivingStationComponent},
  {path:'requests',component:RequestsHISComponent},
  {path:'sample',component:SampleComponent},
  {path:'admin',component:AdminComponent},
  {path:'confirm',component:ConfirmDialogComponent},
  {path:'pendingSamples',component:PendingSamplesComponent},
  {path:'grossingStation',component:GrossingStationComponent},
  {path:'external',component:ExternalPatientComponent},
  {path:'login',component:LoginComponent},
  {path:'verification',component:VerificationComponent},
  {path:"dispatch",component:DispatchComponent},
  {path:"pendingPatients",component:PendingPatientsComponent},
  {path:"pendingDispatchPatients",component:PendingPatientsDispatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
