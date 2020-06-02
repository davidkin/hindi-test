import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeetingFormComponent } from './components/meeting-form/meeting-form.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeetingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
