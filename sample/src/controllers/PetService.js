'use strict';

exports.updatePet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * body (Pet)
   **/

var examples = {};
  

  
  res.end();
}
exports.addPet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * body (Pet)
   **/

var examples = {};
  

  
  res.end();
}
exports.findPetsByStatus = function(args, res, next) {
  /**
   * parameters expected in the args:
   * status (List)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 123456789,
  "category" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "status" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.findPetsByTags = function(args, res, next) {
  /**
   * parameters expected in the args:
   * tags (List)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 123456789,
  "category" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "status" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.getPetById = function(args, res, next) {
  /**
   * parameters expected in the args:
   * petId (Long)
   **/

var examples = {};
  
  examples['application/json'] = {
  "photoUrls" : [ "aeiou" ],
  "name" : "doggie",
  "id" : 123456789,
  "category" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "tags" : [ {
    "name" : "aeiou",
    "id" : 123456789
  } ],
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
exports.updatePetWithForm = function(args, res, next) {
  /**
   * parameters expected in the args:
   * petId (String)
   * name (String)
   * status (String)
   **/

var examples = {};
  

  
  res.end();
}
exports.deletePet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * apiKey (String)
   * petId (Long)
   **/

var examples = {};
  

  
  res.end();
}
