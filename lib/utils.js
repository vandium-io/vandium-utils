'use strict';

function isFunction( value ) {

    return (!!value && value.constructor === Function);
}

function isPromise( value ) {

    return ((!!value && isFunction( value.then ) && isFunction( value.catch ) ));
}

function isObject( value ) {

    let type = typeof value;

    return !!value && ((type == 'object') || (type == 'function'));
}

function isString( value ) {

    return !!value && ((typeof value === 'string') || (value instanceof String));
}

function clone( value ) {

    return Object.assign( {}, value );
}

function parseBoolean( value ) {

    if( !value ) {

        return false;
    }

    if( (value === true) || (value === false) ) {

        return value;
    }

    switch( value.toString().toLowerCase().trim() ) {

        case 'true':
        case 'yes':
        case 'on':
            return true;

        case 'false':
        case 'no':
        case 'off':
            return false;

        default:
            return false;
    }
}

module.exports = {

    clone,

    isObject,

    isString,

    isArray: Array.isArray,

    isFunction,

    isPromise,

    parseBoolean
};
