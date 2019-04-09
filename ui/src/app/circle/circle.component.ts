import {Component, Input, OnInit} from '@angular/core';
import {animate, group, style, transition, trigger} from "@angular/animations";
import {CircleData} from "../../../protos/circles_pb";

// Borrowed circles from http://teropa.info/chime/

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [
    trigger('expand', [
      transition('void => *', [
        style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
        group([
          animate('5s',
            style({opacity: 0})),
          animate('5s cubic-bezier(0,.79,.13,.71)',
            style({transform: 'scale3d(1,1,1) translateZ(0)'}))
        ])
      ])
    ]),
    trigger('flash', [
      transition('void => *', [
        style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
        animate('0.05s ease-in',
          style({opacity: 1, transform: 'scale3d(1,1,1) translateZ(0)'})
        ),
        animate('1s ease-out',
          style({opacity: 0, transform: 'scale3d(0,0,0) translateZ(0)'})
        )
      ])
    ])
  ]
})
export class CircleComponent implements OnInit {
  @Input() config: CircleData.AsObject;

  constructor() { }

  ngOnInit() {
  }

}
