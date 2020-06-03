import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { EncryptService } from 'src/app/shared/services/encrypt.service';
import { IMeet } from 'src/app/shared/interfaces/meet';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  panelOpenState = false;
  meetingData: IMeet[];

  constructor(
    private localStorageService: LocalStorageService,
    private encryptService: EncryptService,
  ) { }

  ngOnInit() {
    const storeData = this.localStorageService.getDataFromStorage('data');
    const decryptData = this.encryptService.decrypt(storeData);

    this.meetingData = JSON.parse(decryptData);
  }

}
