import {Empty} from '../../protos/counter_pb';
import {Injectable} from "@angular/core";
import {CircleData} from "../../protos/circles_pb";
import {Observable, Subject} from "rxjs";
import {bufferTime} from "rxjs/operators";
import {CirclesServiceClient} from "../../protos/circles_pb_service";

@Injectable()
export class CirclesService {
  private service: CirclesServiceClient;
  private circleSubject = new Subject<CircleData.AsObject>();

  constructor() {
    this.service = new CirclesServiceClient('https://grpc-proxy.lod.spotx.tv');
  }

  add(circleRaw: CircleData.AsObject) {
    const circle = new CircleData();
    circle.setX(circleRaw.x);
    circle.setY(circleRaw.y);
    circle.setColor(circleRaw.color);

    const call = this.service.add(
      circle, null,
      (err: any, response: any) => {
        if (err) {
          console.error(err);
        } else {
          console.log('add response', response);
        }
      });
    // call.on('status', (status: any) => {
    //   console.log('add status', status);
    // });
  }

  listen(): Observable<CircleData.AsObject[]> {
    const request = new Empty();
    const call = this.service.listen(request);

    call.on('data', (circle) => {
      console.log('listen data', circle);
      this.circleSubject.next(circle.toObject());
    });
    call.on('end', () => {
      // The server has finished sending
      console.log('listen closed stream');
    });
    // call.on('error' as any, (e) => {
    //   // An error has occurred and the stream has been closed.
    //   console.error('listen error', e);
    // });
    call.on('status', (status) => {
      console.log('listen status', status.metadata);
    });

    return this.circleSubject.pipe(
      bufferTime(5000, 10),
    );
  }
}
