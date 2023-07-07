import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tracking-state',
  templateUrl: './tracking-state.component.html',
  styleUrls: ['./tracking-state.component.scss']
})
export class TrackingStateComponent {

  @Input() event: any;

}
