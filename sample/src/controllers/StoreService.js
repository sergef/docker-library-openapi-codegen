'use strict';

exports.placeOrder = function(args, res, next) {
  /**
   * parameters expected in the args:
   * body (Order)
   **/

var examples = {};
  
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2016-03-25T22:29:35.583+0000",
  "complete" : true,
  "status" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.getOrderById = function(args, res, next) {
  /**
   * parameters expected in the args:
   * orderId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2016-03-25T22:29:35.587+0000",
  "complete" : true,
  "status" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.deleteOrder = function(args, res, next) {
  /**
   * parameters expected in the args:
   * orderId (String)
   **/

var examples = {};
  

  
  res.end();
}
