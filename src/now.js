let now

/* global BROWSER */

if (BROWSER) {
  if (typeof performance !== 'undefined' && performance.now) {
    now = performance.now
  } else {
    now = Date.now
  }
} else {
  // implementation borrowed from:
  // https://github.com/myrne/performance-now/blob/6223a0d544bae1d5578dd7431f78b4ec7d65b15c/src/performance-now.coffee
  let loadTime = getNanoSeconds()
  let hrtime = require('process').hrtime

  function nowHrtime() {
    return getNanoSeconds() - loadTime / 1e6
  }

  function getNanoSeconds() {
    let hr = hrtime()
    return hr[0] * 1e9 + hr[1]
  }

  now = nowHrtime
}
export default now