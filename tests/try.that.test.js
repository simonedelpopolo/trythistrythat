/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../index.js'

export default async ( id ) => {

    const error = await tttt.deeeeepEqual( async () => {

        await tttt.describe( 'deepEqual TEST'.green(), 'statement ->'.red(), 0, '\n' )

        return {
            expected: [ 10 ],
            actual: [ 10 ],
            error: 'error encountered'
        }

    } )

    if( error instanceof Error ) {

        await tttt.failed( true )
        await tttt.describe( 'test failed'.red() )
        await tttt.describe( error )

    }

    else await tttt.describe( 'test passed'.green() )

    await tttt.end_test( id )
}
