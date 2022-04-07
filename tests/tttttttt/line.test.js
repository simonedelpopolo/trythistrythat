/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../../public.js'

export default async function( id ){

    tttt.describe( 'start' )
    await tttt.line( 10 )
    tttt.describe( 'end' )

    tttt.end_test( id )
}

