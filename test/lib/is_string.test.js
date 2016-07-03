'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const isString = require( '../../lib/is_string' );

describe( 'lib/is_string', function() {

    it( 'string', function() {

        expect( isString( "test" ) ).to.be.true;
        expect( isString( new Buffer( "string" ).toString() ) ).to.be.true;
    });

    it( 'other', function() {

        expect( isString( 1234 ) ).to.be.false;
        expect( isString( {} ) ).to.be.false;
        expect( isString( describe ) ).to.be.false;
    });
});
