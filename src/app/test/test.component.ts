import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


  totalCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  inc() {
    this.totalCount = this.totalCount + 1
  }

}
