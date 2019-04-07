import {CounterServiceClient} from "../../../protos/counter_pb_service";
import {Empty} from '../../../protos/counter_pb';
import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  private service: CounterServiceClient;

  constructor() {
    this.service = new CounterServiceClient('http://localhost:8080');
  }

  add() {
    const request = new Empty();
    const call = this.service.add(
      request, null,
      (err: any, response: any) => {
        if (err) {
          // if (err.code !== grpcWeb.StatusCode.OK) {
          //   EchoApp.addRightMessage(
          //     'Error code: ' + err.code + ' "' + err.message + '"');
          // }
          console.error(err);
        } else {
          // setTimeout(() => {
          //   EchoApp.addRightMessage(response.getMessage());
          // }, EchoApp.INTERVAL);
          console.log('response', response);
        }
      });
    // call.on('status' as any, (status: any) => {
    //   if (status.metadata) {
    //     console.log('Received metadata');
    //     console.log(status.metadata);
    //   }
    // });
  }

  listen() {
    const request = new Empty();
    const call = this.service.listen(request);
      // (err: any, response: any) => {
      //   if (err) {
      //     // if (err.code !== grpcWeb.StatusCode.OK) {
      //     //   EchoApp.addRightMessage(
      //     //     'Error code: ' + err.code + ' "' + err.message + '"');
      //     // }
      //     console.error(err);
      //   } else {
      //     // setTimeout(() => {
      //     //   EchoApp.addRightMessage(response.getMessage());
      //     // }, EchoApp.INTERVAL);
      //     console.log('response', response);
      //   }
      // });
    call.on('data', (data) => {
      console.log('data', data);
    });
    call.on('end', () => {
      // The server has finished sending
      console.log('closed stream');
    });
    // call.on('error' as any, (e) => {
    //   // An error has occurred and the stream has been closed.
    //   console.error('error', e);
    // });
    call.on('status', (status) => {
      console.log('status', status.metadata);
    });

  }
}
