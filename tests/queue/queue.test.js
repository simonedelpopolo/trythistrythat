import * as tttt from '../../index.js'
import init from '../../lib/tttt/queue/init.js'
import { stringFromBuffer } from '../../index.js'
import { trace } from '@cli-blaze/activity'
import tttt_twd_get from '../../lib/tttt/twd/get.js'
import tttt_twd_set from '../../lib/tttt/twd/set.js'
import { unit_readdir } from '../../lib/tttt/unit/functions/unit_readdir.js'
import { unit_counter, unit_counter_container } from '../../lib/tttt/queue/unit_counter.js'

/**
 * Module filename - /Volumes/code/trythistrythat/tests/queue/queue.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

  trace( 'here' )
  tttt.end_test( id )
  trace( await tttt_twd_set( 'tests/queue/queue_mock' ).catch( trace ) )
  await unit_counter( { twd:await unit_readdir( stringFromBuffer( tttt_twd_get() ) ).catch( trace ), exclude: null } )

  trace( unit_counter_container )
  init( unit_counter_container )

}

/* eslint-disable */
export async function test_queue_init(){}
export async function test_queue_init1(){}
export async function test_queue_init2(){}
export async function test_queue_init3(){}
export async function test_queue_init4(){}
/* eslint-enable */
