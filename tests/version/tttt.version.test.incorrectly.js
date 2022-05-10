import * as tttt from '../../index.js'
import { spawn } from 'node:child_process'

/**
 * Module filename - /Volumes/code/trythistrythat/tests/tttt.version.test.incorrectly.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  tttt.describe( '# test version flag incorrectly' )
  await tttt.separator( 240, 75, '~' )
  await tttt.line()

  const ttttProcess = spawn( './4t.js', [ '--version=hello' ], { stdio:[ 'ignore', 'pipe', 'pipe' ] } )
  ttttProcess.stderr.on( 'data', data => tttt.describe( data.toString() ) )

  ttttProcess.on( 'exit', () => tttt.end_test( id ) )

}
