import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/model/session.model';

@Component({
  selector: 'app-session-list-item',
  templateUrl: './session-list-item.component.html',
  styleUrls: ['./session-list-item.component.scss']
})
export class SessionListItemComponent implements OnInit {

  @Input()
  session? : Session 

  constructor() { }

  ngOnInit(): void {
  }

  getSessionLength():string {
    if (!this.session?.end) {
      return "Neukončené"
    }
    var diff:number = this.session?.end.toMillis() - this.session?.start.toMillis();
    var diffMinutes = diff % (1000*60*60)
    var diffhours = ((diff - diffMinutes)/1000/60/60).toFixed(0)
    if (diffMinutes > 0) {
      diffMinutes = diffMinutes / 1000/60
      if (diff < 1000*60*60) {
        return diffMinutes.toFixed(0) + "min";
      } else {
        return diffhours + "h " + diffMinutes.toFixed(0) + "min";
      }
    } else {
      return diffhours + "h"
    }
  }
}
