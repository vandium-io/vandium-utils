'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const parseBoolean = require( '../parse_boolean' );

describe( 'lib/parse_boolean', function() {

    [ true, 'yes', 'On', 'True', 'Yes', 'true' ].forEach( function( value ) {

        it( 'value: ' + value, function() {

            expect( parseBoolean( value ) ).to.be.true;
        })
    });

    [ false, 'no', 'off', 'False', 'No', 'false' ].forEach( function( value ) {

        it( 'value: ' + value, function() {

            expect( parseBoolean( value ) ).to.be.false;
        })
    });

    it( 'unknown value', function() {

        expect( parseBoolean( 'whatever' ) ).to.be.false;
    });

    it( 'null value', function() {

        expect( parseBoolean( null ) ).to.be.false;
    });

    it( 'undefined value', function() {

        expect( parseBoolean() ).to.be.false;
    });
});
