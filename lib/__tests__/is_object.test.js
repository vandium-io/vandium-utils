'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const isObject = require( '../is_object' );

describe( 'lib/is_object', function() {

    it( 'object', function() {

        expect( isObject( {} ) ).to.be.true;
    });

    it( 'function', function() {

        expect( isObject( function() {} ) ).to.be.true;
    });

    it( 'array', function() {

        expect( isObject( [ 1, 2, 4 ] ) ).to.be.true;
    });

    it( 'other', function() {

        expect( isObject( 1234 ) ).to.be.false;
        expect( isObject( "fred" ) ).to.be.false;
        expect( isObject() ).to.be.false;
    });
});
