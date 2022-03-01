/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../tttt.js'

export default async () => {
    
    let error
    
    await tttt.describe( 'try.that'.green(), 'assertion ->'.red(), 0 )
    await tttt.describe( '  listing statements'.green(), '⬇︎'.red(), '\n' )
    await tttt.describe( '    deeeeeeeeeeep'.green(), '⚠︎'.red(), 'statement ->'.red(), 1 )
    
    await tttt.describe( '\n', '__________________________________________________________________________', '\n' )
    
    error = await tttt.deeeeepEqual( async () => {
        await tttt.describe( 'deeeeeeeeeeep.'.green(), 'statement ->'.red(), 1, '\n' )
        
        return {
            expected: [ 5 ],
            actual: [ 10 ],
            error: 'ERROR deeeeeeep'
        }
        
    } )
    
    if( error instanceof Error ){
        tttt.failed( true )
        console.trace( error )
    }
    
    await tttt.describe( 'test passed'.green() )
    tttt.end_test()
}
