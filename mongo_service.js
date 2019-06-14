const models     = require('../models');
const invalid_model = 'Model is invalid';

function isFunc(v){
  return Object.prototype.toString.call(v) === '[object Function]';
}

var Mongo = function()
{
    this.model_name = null;
    this.lean  = true;
};

Mongo.prototype.model = function(model_name)
{
    this.model_name = model_name;
    return this;
};

Mongo.prototype.insert = function ( c , cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  let userInstance = new models[this.model_name](c);
  if(isFunc(cb)){
    userInstance.save( c, function(er, resp ){
            if (er) {
                callback(er);
                return;
            }
            callback(null, resp);
    })
  } else {
    return  userInstance.save( c );
  }
}

Mongo.prototype.update = function (c, d, o, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  if(isFunc(cb)){
    models[this.model_name].update(c, d, o, cb);
  } else {
    return models[this.model_name].update(c, d, o);
  }
}

Mongo.prototype.findOne = function ( c, p, o, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  o.lean = this.lean;
  if(isFunc(cb)){
    models[this.model_name].findOne( c, p, o, cb );
  } else {
    return models[this.model_name].findOne( c, p, o);
  }
}

Mongo.prototype.findByIdAndRemove = function (c, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  if(isFunc(cb)){
    models[this.model_name].findByIdAndRemove(c, cb);
  } else {
    return models[this.model_name].findByIdAndRemove(c);
  }
}

Mongo.prototype.find = function ( c, p, o, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  o.lean = this.lean;
  if(isFunc(cb)){
    models.Accounts.find( c, p, o, cb );
  } else {
    return models[this.model_name].find( c, p, o );
  }
}

Mongo.prototype.remove = function (c, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  if(isFunc(cb)){
    models[this.model_name].remove(c, cb);
  } else {
    return models[this.model_name].remove(c);
  }
}

Mongo.prototype.aggregation = function(q, cb)
{
  if(!models[this.model_name]){
    var err = new Error(invalid_model);
    if(cb){
      return cb(err);
    } else {
      return new Error(err);
    }
  }
  if(isFunc(cb)){
    models[this.model_name].aggregate([q], cb);
  } else {
    return models[this.model_name].aggregate([q]);
  }
}

module.exports = new Mongo();
