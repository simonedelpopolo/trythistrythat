import * as tttt from '../index.js'
import { stringFromBuffer } from '../index.js'
import tttt_twd_get from '../lib/tttt/twd/get.js'
import tttt_twd_set from '../lib/tttt/twd/set.js'

export default async ( id ) => {

  await tttt_twd_set( 'tests' )

  console.trace( stringFromBuffer( tttt_twd_get() ) )

  tttt.end_test( id )
}
