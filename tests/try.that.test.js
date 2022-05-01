/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../index.js'
import { Blaze } from '@cli-blaze/decors'

export default async ( id ) => {

    const error = await tttt.deeeeepEqual( async () => {

        tttt.describe( Blaze.green( 'deepEqual TEST' ), Blaze.red( 'statement ->' ), 0, '\n' )

        return {
            expected: [ 10 ],
            actual: [ 10 ],
            error: 'error encountered'
        }

    } )

    if( error instanceof Error ) {

        tttt.failed( true )
        tttt.describe( Blaze.red( 'test failed' ) )
        tttt.describe( error )

    }

    else tttt.describe( Blaze.green( 'test passed' ) )

    tttt.end_test( id )
}
