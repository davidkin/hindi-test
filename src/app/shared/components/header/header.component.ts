import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() translate: TranslateService;

  usaTime = moment.tz('America/New_York').format();

  constructor() { }

  ngOnInit() {
    console.log('England:', this.usaTime);

  }

}
