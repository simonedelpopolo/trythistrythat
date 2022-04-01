/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../tttt.js'

export default async () => {

    const error = await tttt.deeeeepStrictEqual( async () => {

        tttt.describe( 'deepStrictEqual TEST.'.green(), 'statement ->'.red(), 0, '\n' )

        return {
            expected: [ 10 ],
            actual: [ 10 ],
        }

    } )

    if( error instanceof Error ) {

        tttt.failed( true )
        tttt.describe( 'test failed'.red() )
        tttt.describe( error )

    }

    else tttt.describe( 'test passed'.green() )

    await tttt.end_test( tttt.id() )
}