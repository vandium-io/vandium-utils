'use strict';

/*jshint expr: true*/

var expect = require( 'chai' ).expect;

var templateString = require( '../../lib/template_string' );

describe( 'lib/template_string', function() {

    [
        [ 'basic case', 'Hello ${name}', { name: 'Fred' }, 'Hello Fred' ],
        [ 'template string only', '${name}', { name: 'Fred' }, 'Fred' ],
        [ 'multiple values', '${last}, ${first}', { first: 'Fred', last: 'Smith' }, 'Smith, Fred' ],
        [ 'multiple values, via container object', '${user.last}, ${user.first}',
            { user: { first: 'Fred', last: 'Smith' } }, 'Smith, Fred' ],
        [ 'missing value, simple case', 'Hello ${name}', { person: 'Fred' }, 'Hello undefined' ],
        [ 'missing value, object case', 'Hello ${person.name}', { person: { first: 'Fred' } }, 'Hello undefined' ],
        [ 'missing value, value is not object', 'Hello ${person.name}', { person: 'Fred' }, 'Hello undefined' ],
        [ 'escaped case', 'Hello \\${name}', { name: 'Fred' }, 'Hello \\${name}' ],
        [ 'missing state object', 'Hello ${name}', undefined, 'Hello undefined' ],

    ].forEach( function( testCase ) {

        it( testCase[0], function() {

            let result = templateString( testCase[1], testCase[2] );

            expect( result ).to.equal( testCase[3] );
        });
    });

    it( 'missing string case', function() {

        expect( templateString( undefined, { name: 'Fred' } ) ).to.equal( undefined );
    });
});
