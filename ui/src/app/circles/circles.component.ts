import {Component, HostListener, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CirclesService} from "../CirclesService";

export interface ICircle {
  x: number;
  y: number;
  color?: number;
}

@Component({
  selector: 'circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  circles$: Observable<ICircle[]>;

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
