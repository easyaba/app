import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.scss'],
})
export class ChildDetailComponent implements OnInit {
  pathId: string | null | undefined;
  queryParams: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pathId = this.route.snapshot.paramMap.get('id');
    this.queryParams = this.route.snapshot.queryParamMap;
  }
}
