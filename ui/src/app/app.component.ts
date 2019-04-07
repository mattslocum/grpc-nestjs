import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'grpc-ui';

  value = 50;

  ngOnInit() : void {
    this.initService();
  }


  initService() {
    // const echoService = new CounterServiceClient('http://localhost:8080', null, null);
    //
    // const counter = new CounterService(echoService);
    // counter.add();
  }
}
