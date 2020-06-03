import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment-timezone';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() translate: TranslateService;
  title = 'Header.menu.usa';

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.shareService.timeZone = this.title;
  }

  changeTimeZone(value: string) {
    this.title = value;
    this.shareService.timeZone = value;
  }

}
