import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CirclesService} from "../CirclesService";
import {CircleData} from "../../../protos/circles_pb";

@Component({
  selector: 'circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  circles$: Observable<CircleData.AsObject[]>;

  constructor(private circlesService: CirclesService) { }

  ngOnInit() {
    window.document.body.addEventListener('click', this.onClick.bind(this));

    this.circles$ = this.circlesService.listen();
  }

  // @HostListener('click', ['$event'])
  onClick(event:MouseEvent) {
    this.circlesService.add({
      x: event.clientX,
      y: event.clientY,
      color: Math.ceil(Math.random() * 5)
    });
  }
}
