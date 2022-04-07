import * as tttt from '../public.js'
import * as tttt_private from '../index.js'

export default async ( id ) => {

    await tttt_private.tttt_twd_set( 'assertions' )

    console.trace( tttt_private.tttt_twd_get().stringFrom() )

    tttt.end_test( id )
}
