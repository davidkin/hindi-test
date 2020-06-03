import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { EncryptService } from 'src/app/shared/services/encrypt.service';
import { IMeet } from 'src/app/shared/interfaces/meet';
import { ShareService } from 'src/app/shared/services/share.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  panelOpenState = false;
  meetingData: IMeet[];
  timeZone: string;

  constructor(
    private localStorageService: LocalStorageService,
    private encryptService: EncryptService,
    private sahreService: ShareService
  ) { }

  ngOnInit() {
    const storeData = this.localStorageService.getDataFromStorage('data');
    const decryptData = this.encryptService.decrypt(storeData);

    this.meetingData = JSON.parse(decryptData);
    this.timeZone = this.sahreService.timeZone;
  }

}
