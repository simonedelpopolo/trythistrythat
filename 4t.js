#!/usr/bin/env node

// Splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

// Process name.
process.title = 'tttt'
