/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../tttt.js'

export default async () => {
    
    tttt.describe( 'try.this'.green(), 'assertion ->'.red(), 0 )
    tttt.describe( '  listing statements'.green(), '⬇︎'.red(), '\n' )
    tttt.describe( '    oKi'.green(), '⚠︎'.red(), 'statement ->'.red(), 0 )
    tttt.describe( '    deeeeeeeeeeep'.green(), '⚠︎'.red(), 'statement ->'.red(), 1 )
    
    tttt.separator()
    
    let error
    error = await tttt.oki( async () => {
        tttt.describe( 'oKi.'.green(), 'statement ->'.red(), 0, '\n' )
        
        return {
            expected: 10,
            actual: 10,
            error: 'gniiiiiiii oKi'
        }
        
    } )
    
    if( error instanceof Error ) {
        console.log( 'test failed'.red() )
        tttt.failed( true )
        console.trace( error )
    }else
        console.log( 'test passed'.green() )
    
    
    tttt.separator()
    
    error = await tttt.deeeeepEqual( async () => {
        tttt.describe( 'deeeeeeeeeeep.'.green(), 'statement ->'.red(), 1, '\n' )
        
        return {
            expected: [ 10 ],
            actual: [ 10 ],
            error: 'gniiiiiiii deeeeeeep'
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
