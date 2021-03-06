import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import * as moment from 'moment';
import { EncryptService } from 'src/app/shared/services/encrypt.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { IMeet } from 'src/app/shared/interfaces/meet';

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
  submitted = false;
  storeError = false;

  form: FormGroup;
  startDate: Date = new Date(2020, 5, 4);
  maxDate: Date = new Date(2020, 6, 4);

  constructor(
    private formBuilder: FormBuilder,
    private encryptService: EncryptService,
    private localStorageService: LocalStorageService,
    private route: Router
  ) { }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.formInit();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let meetings = [];

    const formData: IMeet = {
      ...this.form.value,
      meetingDate: this.form.value.meetingDate.format('DD MM YYYY')
    };

    meetings.push(formData);

    const encryptData = this.encryptService.encrypt(meetings);
    const hasStoreData = this.localStorageService.hasStoreData('data');

    if (!hasStoreData) {
      const isStoreDataSuccess = this.localStorageService.addDataToStorage('data', encryptData);
      this.storeCheck(isStoreDataSuccess);

    } else if (hasStoreData) {
      const data = this.localStorageService.getDataFromStorage('data');
      const decryptData = this.encryptService.decrypt(data);

      meetings = JSON.parse(decryptData);
      meetings.push(formData);

      const encryptNewData = this.encryptService.encrypt(meetings);
      const isStoreDataSuccess = this.localStorageService.addDataToStorage('data', encryptNewData);

      this.storeCheck(isStoreDataSuccess);
    }
  }

  formInit(): void {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required] ],
      meetingDate: ['', [Validators.required] ],
      startTime: ['12:01', [Validators.required] ],
      endTime: ['12:02', [Validators.required] ]
    });
  }

  storeCheck(isSuccess: boolean): void {
    if (isSuccess) {
      this.form.reset();
      this.route.navigate(['/meeting-list']);
    } else {
      this.storeError = true;
    }
  }

}
