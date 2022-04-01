/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../../tttt.js'

export default async () => {

    const error = await tttt.oki( async () => {

        tttt.describe( 'sub directory crawling UNIT test', 0, '\n' )

        return {
            expected: 'string',
            actual: 'string',
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
