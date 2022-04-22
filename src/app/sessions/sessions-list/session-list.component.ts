import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Session } from 'src/app/model/session.model';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-session-list-component',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

    @Input()
    sessions? : Session[];

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit()  {
    //this.sessions = this.sessionService.getSessions()

    console.log("ROute data ", this.route.snapshot.data)
  }

}

