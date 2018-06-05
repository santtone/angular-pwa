import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {UpdateActivatedEvent, UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {SwUtilsService} from './config/sw-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular PWA';

  constructor(private swUtils: SwUtilsService) {
    this.swUtils.checkUpdates();
  }

}
