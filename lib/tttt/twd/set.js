import { constants } from 'node:fs'
import { error_code } from '@cli-blaze/error'
import { exit } from '@cli-blaze/activity'
import { default as path_container } from './path.js'
import { access, stat } from 'node:fs/promises'
import { oftype_, string_ } from 'oftypes'

/**
 * Object [ tttt.twd.set ]
 * twd setter.
 *
 * @param {string} [path=tests] - test working directory
 * @throws
 * @returns {Promise<void>|void}
 */
export default async function tttt_twd_set ( path = 'tests' ) {

    let error = await access( path, constants.F_OK | constants.R_OK |constants.W_OK ).catch( error => error )

    if( error instanceof Error ) {
        const object = {
            Object: '[ tttt.twd.set() ]',
            path: `${ process.cwd() }/${ path }`,
            [ error.code ]: 'file permissions not satisfied',
            permissions: `0o${ ( await stat( path ).then( async stat => stat.mode )
                .catch( () => null ) & 0o777 ).toString( 8 ) }`,

        }

        await exit( JSON.stringify( object ), error, error_code.INTERNAL )
    }

    let pathArray = await string_( path )

        ? Array.from( path )
        : await exit( `only string for path argument.
<oftype>${ await oftype_( path ) }</oftype>`,
        new ReferenceError( 'Object [ tttt.twd.set] argument-error' ),
        error_code.TYPE )

    const path_length = pathArray.length
    const pathBuffer = new ArrayBuffer( 16 )
    const pathBufferView = new Uint8Array( pathBuffer )


    if( path_length > 16 ) {
        await exit( `path length exceeds in bytes.
<lenght>${ path_length }</lenght> reduce it dude`,
        new ReferenceError( 'Object [ tttt.twd.set] - bytes-length-error' ),
        error_code.INTERNAL )
    }

    if( path_length === 0 )
        pathArray = Array.from( 'tests' )

    for ( const char in pathArray ) pathBufferView[ char ] = pathArray[ char ].codePointAt( 0 )

    path_container.push( pathBuffer )
}
