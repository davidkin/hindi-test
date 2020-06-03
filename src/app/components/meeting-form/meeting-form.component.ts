import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import * as moment from 'moment';
import { EncryptService } from 'src/app/shared/services/encrypt.service';
import { Router } from '@angular/router';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MeetingFormComponent implements OnInit {
  myForm: FormGroup;

  startDate: Date = new Date(2020, 5, 4);
  maxDate: Date = new Date(2020, 6, 4);

  constructor(
    private formBuilder: FormBuilder,
    private encryptService: EncryptService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      fullName: ['Kirill Pietkov', [Validators.required] ],
      meetingDate: ['', [Validators.required] ],
      startTime: ['12:00', [Validators.required] ],
      endTime: ['12:10', [Validators.required] ]
    });
  }

  onSubmit(): void {
    const formData = {
      ...this.myForm.value,
      meetingDate: this.myForm.value.meetingDate.format('DD MM YYYY')
    };
    const encryptData = this.encryptService.encrypt(formData);

    localStorage.setItem('formData', encryptData);

    this.myForm.reset();

    this.route.navigate(['/meeting-list']);
  }
}
