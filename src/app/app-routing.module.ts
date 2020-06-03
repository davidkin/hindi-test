import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MeetingFormComponent } from './components/meeting-form/meeting-form.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';


const routes: Routes = [
  { path: '', component: MeetingFormComponent },
  { path: 'meeting-list', component: MeetingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
