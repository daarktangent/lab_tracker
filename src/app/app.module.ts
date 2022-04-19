import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './MyComponents/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button"
import {MatToolbarModule} from "@angular/material/toolbar"
import { FormsModule } from '@angular/forms';
import { ReceivingStationComponent } from './MyComponents/receiving-station/receiving-station.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsHISComponent } from './MyComponents/requests-his/requests-his.component';
import { SampleComponent } from './MyComponents/sample/sample.component';
;import { MatTableModule } from '@angular/material/table'
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
//import {MatDialogModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './MyComponents/confirm-dialog/confirm-dialog.component';
//import { AdminComponent } from './MyComponents/admin/admin.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
// import {MatCardContent} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { SearchfilterPipe } from './searchfilter.pipe';

import {ReactiveFormsModule} from '@angular/forms';
import { GrossingStationComponent } from './MyComponents/grossing-station/grossing-station.component';
import { PendingSamplesComponent } from './MyComponents/pending-samples/pending-samples.component';
import { ExternalPatientComponent } from './MyComponents/external-patient/external-patient.component'

import {MatTabsModule} from '@angular/material/tabs';
import { VerificationComponent } from './MyComponents/verification/verification.component';
import { DispatchComponent } from './MyComponents/dispatch/dispatch.component';
import { PendingPatientsComponent } from './MyComponents/pending-patients/pending-patients.component';
import { PendingPatientsDispatchComponent } from './MyComponents/pending-patients-dispatch/pending-patients-dispatch.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceivingStationComponent,
    RequestsHISComponent,
    SampleComponent,
    ConfirmDialogComponent,
    AdminComponent,
    SearchfilterPipe,
    GrossingStationComponent,
    PendingSamplesComponent,
    ExternalPatientComponent,
    VerificationComponent,
    DispatchComponent,
    PendingPatientsComponent,
    PendingPatientsDispatchComponent,
    //AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatDatepickerModule ,
    MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    // MatCardContent
    MatDividerModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSortModule,
    ReactiveFormsModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
