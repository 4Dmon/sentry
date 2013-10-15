var async = require('async');

module.exports = function(opts) {
  opts = opts || {};
  
  // Merge opts with:
  // {
  //  port: 4077, // communicate with the world via http
  //  tasks: [],
  //  interval: null
  // }
  
  this.start = function() {
    // Start intervals
  };
  
  this.pause = function() {
    // Stop intervals
    // Don't respond to runOnce()?
  };
  
  this.reset = function() {
    // Clear the internal error queue and restart intervals
  };
  
  this.runOnce = function(cb) {
    runTaskQueue(cb);
  };
  
  this.pipe = function(writableStream) {
    // Send standard out to writableStream
    // Useful for monitoring progress from 4Dmon's web front end
  };
  
  var runTaskQueue = function(cb) {
    async.series(opts.tasks, cb);
  };
  
};