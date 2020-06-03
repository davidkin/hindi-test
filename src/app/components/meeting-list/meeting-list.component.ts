import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  panelOpenState = false;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.localStorageService.getDataFromStorage('data');
  }

}
