import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from 'src/app/model/session.model';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-session-date-list',
  templateUrl: './session-date-list.component.html',
  styleUrls: ['./session-date-list.component.scss']
})
export class SessionDateListComponent implements OnInit {

  dates? : String[]
  sessionsMap$? : Observable<Map<String,Session[]>>
  sessionsMap? : Map<String,Session[]>
  constructor(private sessionService: SessionService,  private route: ActivatedRoute) {
  }


  ngOnInit(): void {

      this.sessionService.getSessions().subscribe
      (sesMap => {
        this.sessionsMap = sesMap;
        this.dates = Array.from( sesMap.keys() );
      })
  }

}
