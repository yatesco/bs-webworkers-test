// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';


var worker = new Worker("worker.bs.js");

var msg = {
  text: "Hello world"
};

worker.postMessage(msg);

function msgBackHandler(e) {
  console.log("I am the main thread and I have received a message back from the worker:");
  console.log(e.data);
  return /* () */0;
}

worker.onmessage = msgBackHandler;

console.log("Hello, BuckleScript and Reason!");

exports.worker         = worker;
exports.msg            = msg;
exports.msgBackHandler = msgBackHandler;
/* worker Not a pure module */
