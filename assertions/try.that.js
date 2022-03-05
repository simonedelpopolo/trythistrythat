/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../tttt.js'

export default async () => {
    
    let error
    
    tttt.describe( 'try.that'.green(), 'assertion ->'.red(), 0 )
    tttt.describe( '  listing statements'.green(), '⬇︎'.red(), '\n' )
    tttt.describe( '    deeeeeeeeeeep'.green(), '⚠︎'.red(), 'statement ->'.red(), 1 )
    
    tttt.describe( '\n', '__________________________________________________________________________', '\n' )
    
    error = await tttt.deeeeepEqual( async () => {
        tttt.describe( 'deeeeeeeeeeep.'.green(), 'statement ->'.red(), 1, '\n' )
        
        return {
            expected: [ 10 ],
            actual: [ 10 ],
            error: 'ERROR deeeeeeep'
        }
        
    } )
    
    if( error instanceof Error ) {
        console.log( 'test failed'.red() )
        tttt.failed( true )
        console.trace( error )
    }else
        console.log( 'test passed'.green() )
    
    tttt.end_test( tttt.id() )
}
