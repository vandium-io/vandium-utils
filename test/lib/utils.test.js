'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const utils = require( '../../lib/utils' );

describe( 'lib/utils', function() {

    describe( '.isFunction', function() {

        it( 'function', function() {

            expect( utils.isFunction( describe ) ).to.be.true;
        });

        it( 'other', function() {

            expect( utils.isFunction( "hello" ) ).to.be.false;
            expect( utils.isFunction( 42 ) ).to.be.false;
            expect( utils.isFunction() ).to.be.false;
        })
    });

    describe( '.isArray', function() {

        it( 'stubbed implementation', function() {

            expect( utils.isArray ).to.equal( Array.isArray );
        });
    });

    describe( '.isPromise', function() {

        it( 'promise', function() {

            expect( utils.isPromise( Promise.resolve() ) ).to.be.true;
            expect( utils.isPromise( Promise.reject() ) ).to.be.true;
            expect( utils.isPromise( new Promise( function() {}) ) ).to.be.true;
        });

        it( 'other', function() {

            expect( utils.isPromise( { then: function() {} } ) ).to.be.false;
            expect( utils.isPromise( { catch: function() {} } ) ).to.be.false;
            expect( utils.isPromise() ).to.be.false;
        });
    });

    describe( '.isObject', function() {

        it( 'normal operation', function() {

            expect( utils.isObject ).to.equal( require( '../../lib/is_object' ) );
        });
    });

    describe( '.isString', function() {

        it( 'normal operation', function() {

            expect( utils.isString ).to.equal( require( '../../lib/is_string' ) );
        });
    });

    describe( '.clone', function() {

        it( 'with object', function() {

            let v1 = { name: 'fred', age: 42 };

            let v2 = utils.clone( v1 );

            expect( v1 ).to.not.equal( v2 );
            expect( v1 ).to.eql( v2 );
        });

        it( 'with constant string', function() {

            let v1 = 'fred'

            let v2 = utils.clone( v1 );

            expect( v1 ).to.equal( v2 );
            expect( v1 === v2 ).to.be.true;
        });

        it( 'with constant int', function() {

            let v1 = 1234;

            let v2 = utils.clone( v1 );

            expect( v1 ).to.equal( v2 );
            expect( v1 === v2 ).to.be.true;
        });

        it( 'with null', function() {

            let v1 = null;

            let v2 = utils.clone( v1 );

            expect( v1 ).to.equal( v2 );
            expect( v1 ).to.be.null;
        });

        it( 'with undefined', function() {

            let v1 = null;

            let v2 = utils.clone( v1 );

            expect( v1 ).to.equal( v2 );
            expect( v1 ).to.not.exist;
        });
    });

    describe( '.parseBoolean', function() {

        it( 'normal operation', function() {

            expect( utils.parseBoolean ).to.equal( require( '../../lib/parse_boolean' ) );
        });
    });

    describe( '.templateString', function() {

        it( 'normal operation', function() {

            expect( utils.templateString ).to.equal( require( '../../lib/template_string' ) );
        });
    });
});
