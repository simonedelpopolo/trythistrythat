#!/usr/bin/env node --experimental-json-modules --experimental-import-meta-resolve --trace-warnings --no-warnings
export const overall_execution_time_start = process.hrtime.bigint()
export const tttt_executable = process.argv[ 1 ]
import { tttt } from './lib/tttt.js'

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )
process.title = '4t'

await tttt()
