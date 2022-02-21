/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../tttt.js'

export default async () => {
    
    await tttt.describe( 'try.this'.green(), 'assertion ->'.red(), 0 )
    await tttt.describe( '  listing statements'.green(), '⬇︎'.red(), '\n' )
    await tttt.describe( '    oKi'.green(), '⚠︎'.red(), 'statement ->'.red(), 0 )
    await tttt.describe( '    deeeeeeeeeeep'.green(), '⚠︎'.red(), 'statement ->'.red(), 1 )
    
    await tttt.describe( '\n', '__________________________________________________________________________', '\n' )
    
    let error
    error = await tttt.oki( async () => {
        await tttt.describe( 'oKi.'.green(), 'statement ->'.red(), 0, '\n' )
        
        return {
            expected: 5,
            actual: 10,
            error: 'gniiiiiiii oKi'
        }
        
    } )
    
    if( error instanceof Error ) {
        tttt.failed( true )
        console.trace( error )
    }
    
    await tttt.describe( '\n', '__________________________________________________________________________', '\n' )
    
    error = await tttt.deeeeepEqual( async () => {
        await tttt.describe( 'deeeeeeeeeeep.'.green(), 'statement ->'.red(), 1, '\n' )
        
        return {
            expected: [ 5 ],
            actual: [ 10 ],
            error: 'gniiiiiiii deeeeeeep'
        }
        
    } )
    
    if( error instanceof Error ){
        tttt.failed( true )
        console.trace( error )
    }
    
    tttt.end_test()
}
