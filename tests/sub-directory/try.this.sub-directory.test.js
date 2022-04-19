/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../../index.js'

export default async ( id ) => {

    const error = await tttt.oki( async () => {

        await tttt.describe( 'sub directory crawling UNIT test', 0, '\n' )

        return {
            expected: 'string',
            actual: 'string',
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
