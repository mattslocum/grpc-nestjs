// package: circles
// file: circles.proto

var circles_pb = require("./circles_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CirclesService = (function () {
  function CirclesService() {}
  CirclesService.serviceName = "circles.CirclesService";
  return CirclesService;
}());

CirclesService.Add = {
  methodName: "Add",
  service: CirclesService,
  requestStream: false,
  responseStream: false,
  requestType: circles_pb.CircleData,
  responseType: circles_pb.Empty
};

CirclesService.Listen = {
  methodName: "Listen",
  service: CirclesService,
  requestStream: false,
  responseStream: true,
  requestType: circles_pb.Empty,
  responseType: circles_pb.CircleData
};

exports.CirclesService = CirclesService;

function CirclesServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CirclesServiceClient.prototype.add = function add(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CirclesService.Add, {
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

CirclesServiceClient.prototype.listen = function listen(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CirclesService.Listen, {
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

exports.CirclesServiceClient = CirclesServiceClient;

