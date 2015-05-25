// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// first things first, set the timezone; see tzset(3)
process.env.TZ = 'Europe/Amsterdam';

assert = require('assert');
spawn = require('child_process').spawn;

// time difference between Greenwich and Amsterdam is +2 hours in the summer
date = new Date('Fri, 10 Sep 1982 03:15:00 GMT');
assert.equal(3, date.getUTCHours());
assert.equal(5, date.getHours());

// changes in environment should be visible to child processes
if (process.argv[2] == 'you-are-the-child') {
  // failed assertion results in process exiting with status code 1
  assert.equal(false, 'NODE_PROCESS_ENV_DELETED' in process.env);
  assert.equal(42, process.env.NODE_PROCESS_ENV);
  process.exit(0);
} else {
  process.env.NODE_PROCESS_ENV = 42;
  assert.equal(42, process.env.NODE_PROCESS_ENV);

  process.env.NODE_PROCESS_ENV_DELETED = 42;
  assert.equal(true, 'NODE_PROCESS_ENV_DELETED' in process.env);

  delete process.env.NODE_PROCESS_ENV_DELETED;
  assert.equal(false, 'NODE_PROCESS_ENV_DELETED' in process.env);

  child = spawn(process.argv[0], [process.argv[1], 'you-are-the-child']);
  child.stdout.on('data', function(data) { console.log(data.toString()); });
  child.stderr.on('data', function(data) { console.log(data.toString()); });
  child.on('exit', function(statusCode) {
    if (statusCode != 0) {
      process.exit(statusCode);  // failed assertion in child process
    }
  });
}
