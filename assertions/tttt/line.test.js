/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../../tttt.js'

export default async function(){
    tttt.describe( 'start' )
    tttt.line( 10 )
    tttt.describe( 'end' )

    tttt.end_test( tttt.id() )
}

