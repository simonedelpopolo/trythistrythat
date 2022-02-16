#!/usr/bin/env node

// - splicing out from `process.argv` the paths for node and 4t.js
process.argv.splice( 0, 2 )

// - process.title
process.title = '4t'
