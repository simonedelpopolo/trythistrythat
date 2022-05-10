/* eslint-disable jsdoc/require-jsdoc */
import * as tttt from '../index.js'
import { Blaze } from '@cli-blaze/decors'

export default async ( id ) => {

  const error = await tttt.deeeeepStrictEqual( async () => {

    tttt.describe( Blaze.green( 'deepStrictEqual TEST.' ), Blaze.red( 'statement ->' ), 0, '\n' )

    return {
      expected: [ 10 ],
      actual: [ 10 ],
    }

  } )

  if( error instanceof Error ) {

    tttt.failed( true )
    tttt.describe( Blaze.red( 'test failed' ) )
    tttt.describe( error )

  }

  else tttt.describe( Blaze.green( 'test passed' ) )

  tttt.end_test( id )
}
