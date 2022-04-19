/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../index.js'

export default async ( id ) => {

    const error = await tttt.deeeeepStrictEqual( async () => {

        await tttt.describe( 'deepStrictEqual TEST.'.green(), 'statement ->'.red(), 0, '\n' )

        return {
            expected: [ 10 ],
            actual: [ 10 ],
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
