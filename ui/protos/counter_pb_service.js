// package: counter
// file: counter.proto

var counter_pb = require("./counter_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CounterService = (function () {
  function CounterService() {}
  CounterService.serviceName = "counter.CounterService";
  return CounterService;
}());

CounterService.Add = {
  methodName: "Add",
  service: CounterService,
  requestStream: false,
  responseStream: false,
  requestType: counter_pb.Empty,
  responseType: counter_pb.CountResponse
};

CounterService.Subtract = {
  methodName: "Subtract",
  service: CounterService,
  requestStream: false,
  responseStream: false,
  requestType: counter_pb.Empty,
  responseType: counter_pb.CountResponse
};

CounterService.Listen = {
  methodName: "Listen",
  service: CounterService,
  requestStream: false,
  responseStream: true,
  requestType: counter_pb.Empty,
  responseType: counter_pb.CountResponse
};

exports.CounterService = CounterService;

function CounterServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CounterServiceClient.prototype.add = function add(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CounterService.Add, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CounterServiceClient.prototype.subtract = function subtract(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CounterService.Subtract, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CounterServiceClient.prototype.listen = function listen(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CounterService.Listen, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.CounterServiceClient = CounterServiceClient;

