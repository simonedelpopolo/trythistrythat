import { constants } from 'node:fs'
import { default as path_container } from './path.js'
import { default as twd } from '../twd.js'
import { access, stat } from 'node:fs/promises'
import { oftype_, string_ } from 'oftypes'
import { process_exit, shell_exit_codes } from '../../../index.js'

const setSymbol = Symbol.for( 'Object [ tttt.twd.set ]' )
const set = Object.defineProperty( twd, setSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ tttt.twd.set ]
     * twd setter.
     *
     * @param {string} [path=assertions] - test working directory
     * @throws
     * @returns {Promise<void>|void}
     */
    value: async function tttt_twd_set ( path = 'assertions' ) {

        let error = await access( path, constants.F_OK | constants.R_OK |constants.W_OK ).catch( error => error )

        if( error instanceof Error ) {
            const object = {
                Object: '[ tttt.twd.set() ]',
                path: `${ process.cwd() }/${ path }`,
                [ error.code ]: 'file permissions not satisfied',
                permissions: `0o${ ( await stat( path ).then( async stat => stat.mode )
                    .catch( () => null ) & 0o777 ).toString( 8 ) }`,

            }

            await process_exit( JSON.stringify( object ), error, shell_exit_codes.internal )
        }

        let pathArray = await string_( path )

            ? Array.from( path )
            : await process_exit( `only string for path argument.
<oftype>${ await oftype_( path ) }</oftype>`,
            new ReferenceError( 'Object [ tttt.twd.set] argument-error' ),
            shell_exit_codes.type_checking )

        const path_length = pathArray.length
        const pathBuffer = new ArrayBuffer( 16 )
        const pathBufferView = new Uint8Array( pathBuffer )


        if( path_length > 16 ) {
            await process_exit( `path length exceeds in bytes.
<lenght>${ path_length }</lenght> reduce it dude`,
            new ReferenceError( 'Object [ tttt.twd.set] - bytes-length-error' ),
            shell_exit_codes.internal )
        }

        if( path_length === 0 )
            pathArray = Array.from( 'assertions' )

        for ( const char in pathArray ) pathBufferView[ char ] = pathArray[ char ].codePointAt( 0 )

        path_container.push( pathBuffer )
    }
} )

export default set[ setSymbol ]
