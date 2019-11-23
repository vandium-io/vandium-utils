'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const utils = require( '../utils' );

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

            let rejected = Promise.reject();
            expect( utils.isPromise( rejected ) ).to.be.true;
            rejected.catch( () => {} );   // handle rejection

            expect( utils.isPromise( new Promise( function() {}) ) ).to.be.true;
        });

        it( 'other', function() {

            expect( utils.isPromise( { then: function() {} } ) ).to.be.false;
            expect( utils.isPromise( { catch: function() {} } ) ).to.be.false;
            expect( utils.isPromise() ).to.be.false;
        });
    });

    describe( '.isObject', function() {

        const { isObject } = utils;

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

    describe( '.isString', function() {

        const { isString } = utils;

        it( 'string', function() {

            expect( isString( "test" ) ).to.be.true;
            expect( isString( new Buffer.from( "string" ).toString() ) ).to.be.true;
        });

        it( 'other', function() {

            expect( isString( 1234 ) ).to.be.false;
            expect( isString( {} ) ).to.be.false;
            expect( isString( describe ) ).to.be.false;
            expect( isString( () => 'str' ) ).to.be.false;
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

    describe( '.isObjectEmpty', function() {

        const { isObjectEmpty } = utils;

        it( 'normal operation', function() {

            expect( isObjectEmpty() ).to.be.true;
            expect( isObjectEmpty( undefined ) ).to.be.true;
            expect( isObjectEmpty( null ) ).to.be.true;
            expect( isObjectEmpty( {} ) ).to.be.true;

            expect( isObjectEmpty( { one: 1 } ) ).to.be.false;
        });
    });

    describe( '.dateToISOString', function() {

        const { dateToISOString } = utils;

        it( 'normal operation', function() {

            let date = new Date();

            let isoString1 = dateToISOString( date );
            let isoString2 = dateToISOString( date, true );

            expect( isoString1.length < isoString2.length ).to.be.true;
        });
    });

    describe( '.parseBoolean', function() {

        it( 'normal operation', function() {

            expect( utils.parseBoolean ).to.equal( require( '../parse_boolean' ) );
        });
    });

    describe( '.templateString', function() {

        it( 'normal operation', function() {

            expect( utils.templateString ).to.equal( require( '../template_string' ) );
        });
    });
});
