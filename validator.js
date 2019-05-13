exports.isString = function(variable){
    if((typeof variable === "string") && (variable.constructor.name === 'String')) return true;
    return false;
}

exports.isArray = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Array') return true;
    return false;
}

exports.isNumber = function(variable){
    if((typeof variable === "number") && (variable.constructor.name === 'Number')) return true;
    return false;
}

exports.isInt = function(variable){
    if((typeof variable === "number") && (variable.constructor.name === 'Number')){
      return (variable % 1) === 0;
    }
    return false;
}

exports.isFloat = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Number'){
      return variable === variable && variable % 1 !== 0;
    }
    return false;
}

exports.isBigInt = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'BigInt') return true;
    return false;
}

exports.isNull= function(variable){
    if(variable === null) return true;
    return false;
}

exports.isUndefined= function(variable){
    if(variable === undefined) return true;
    return false;
}

exports.isBuffer = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Buffer') return true;
    return false;
}

exports.isRegex = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'RegExp') return true;
    return false;
}

exports.isObject = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Object') return true;
    return false;
}

exports.isBoolean = function(variable) {
    if(variable === true || variable === false) return true;
    return false;
}

exports.isFunction = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return false}
          return true;
        }catch(err){return false}
    }
    return false;
}

exports.isClass = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Function'){
        try{
          var cls = /^class\s+/.test(variable.toString().trim())
          if(cls){return true}
          return false;
        }catch(err){return false}
    }
    return false;
}

exports.isDate = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Date') return true;
    return false;
}

exports.isError = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Error') return true;
    return false;
}

exports.isSymbol = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Symbol') return true;
    return false;
}

exports.isPromise = function(variable){
    if(!variable) return false;
    if(variable.constructor.name === 'Promise') return true;
    return false;
}
