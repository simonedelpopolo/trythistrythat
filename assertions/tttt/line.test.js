/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../../public.js'

export default async function( id ){

    await tttt.describe( 'start' )
    await tttt.line( 10 )
    await tttt.describe( 'end' )

    tttt.end_test( id )
}

